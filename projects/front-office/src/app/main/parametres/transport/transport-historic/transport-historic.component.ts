import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { TransportService } from '../transport.service';
import { Transport } from '../transport.model';
import { TransportFormComponent } from '../transport-form/transport-form.component';

@Component({
  selector: 'app-transport-historic',
  templateUrl: './transport-historic.component.html',
  styleUrls: ['./transport-historic.component.scss']
})
export class TransportHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(TransportFormComponent, {static: true}) transportForm: TransportFormComponent;
  objectList$: Observable<Transport[]> = this.transportService.objectList$;
  loading$ = this.transportService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Transport = null;
  item: Transport = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private transportService: TransportService,
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
    this.transportService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'transport', 'create']);
  }

  executeAction(type, item: Transport) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Transport) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Transport) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Transport) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.transportService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.transportService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.transportForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
