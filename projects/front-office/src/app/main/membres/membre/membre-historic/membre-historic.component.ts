import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { MembreService } from '../membre.service';
import { Membre } from '../membre.model';
import { MembreFormComponent } from '../membre-form/membre-form.component';

@Component({
  selector: 'app-membre-historic',
  templateUrl: './membre-historic.component.html',
  styleUrls: ['./membre-historic.component.scss']
})
export class MembreHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(MembreFormComponent, {static: true}) membreForm: MembreFormComponent;
  objectList$ = this.membreService.objectList$;
  loading$ = this.membreService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Membre = null;
  item: Membre = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private membreService: MembreService,
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
    this.membreService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'membre', 'create']);
  }

  executeAction(type, item: Membre) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Membre) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Membre) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Membre) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.membreService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.membreService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.membreForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
