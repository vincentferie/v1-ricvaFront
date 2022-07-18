import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { InventaireService } from '../inventaire.service';
import { Inventaire } from '../inventaire.model';
import { InventaireFormComponent } from '../inventaire-form/inventaire-form.component';

@Component({
  selector: 'app-inventaire-historic',
  templateUrl: './inventaire-historic.component.html',
  styleUrls: ['./inventaire-historic.component.scss']
})
export class InventaireHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(InventaireFormComponent, {static: true}) inventaireForm: InventaireFormComponent;
  objectList$ = this.inventaireService.objectList$;
  loading$ = this.inventaireService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Inventaire = null;
  item: Inventaire = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private inventaireService: InventaireService,
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
    this.inventaireService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'inventaire', 'create']);
  }

  executeAction(type, item: Inventaire) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Inventaire) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Inventaire) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Inventaire) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.inventaireService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.inventaireService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.inventaireForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
