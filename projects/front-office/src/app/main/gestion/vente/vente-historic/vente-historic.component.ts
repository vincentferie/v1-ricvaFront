import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { VenteService } from '../vente.service';
import { Vente } from '../vente.model';
import { VenteFormComponent } from '../vente-form/vente-form.component';

@Component({
  selector: 'app-vente-historic',
  templateUrl: './vente-historic.component.html',
  styleUrls: ['./vente-historic.component.scss']
})
export class VenteHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(VenteFormComponent, {static: true}) venteForm: VenteFormComponent;
  objectList$ = this.venteService.objectList$;
  loading$ = this.venteService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Vente = null;
  item: Vente = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private venteService: VenteService,
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
    this.venteService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'vente', 'create']);
  }

  executeAction(type, item: Vente) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Vente) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Vente) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Vente) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.venteService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.venteService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.venteForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
