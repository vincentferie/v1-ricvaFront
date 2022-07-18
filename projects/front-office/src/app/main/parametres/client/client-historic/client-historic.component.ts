import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { ClientFormComponent } from '../client-form/client-form.component';

@Component({
  selector: 'app-client-historic',
  templateUrl: './client-historic.component.html',
  styleUrls: ['./client-historic.component.scss']
})
export class ClientHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(ClientFormComponent, {static: true}) clientForm: ClientFormComponent;
  objectList$: Observable<Client[]> = this.clientService.objectList$;
  loading$: Observable<boolean> = this.clientService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Client = null;
  item: Client = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private clientService: ClientService,
    private router: Router,
    private appService: AppService
  ) {
  }

  ngOnInit() {
    this.appUrlSubscription = this.appService.appUrl$.subscribe(appUrl => this.appUrl = appUrl);
    this.refresh();
  }

  ngOnDestroy() {
    this.appUrlSubscription.unsubscribe();
  }

  refresh() {
    this.clientService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'client', 'create']);
  }

  executeAction(type, item: Client) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Client) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Client) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Client) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.clientService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.clientService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.clientForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
