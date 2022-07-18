import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { DroitAdhesionService } from '../droit-adhesion.service';
import { DroitAdhesion } from '../droit-adhesion.model';
import { DroitAdhesionFormComponent } from '../droit-adhesion-form/droit-adhesion-form.component';

@Component({
  selector: 'app-droit-adhesion-historic',
  templateUrl: './droit-adhesion-historic.component.html',
  styleUrls: ['./droit-adhesion-historic.component.scss']
})
export class DroitAdhesionHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(DroitAdhesionFormComponent, {static: true}) droitAdhesionForm: DroitAdhesionFormComponent;
  objectList$: Observable<DroitAdhesion[]> = this.droitAdhesionService.objectList$;
  loading$: Observable<boolean> = this.droitAdhesionService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: DroitAdhesion = null;
  item: DroitAdhesion = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private droitAdhesionService: DroitAdhesionService,
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
    this.droitAdhesionService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'droit-adhesion', 'create']);
  }

  executeAction(type, item: DroitAdhesion) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: DroitAdhesion) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: DroitAdhesion) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: DroitAdhesion) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.droitAdhesionService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.droitAdhesionService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.droitAdhesionForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
