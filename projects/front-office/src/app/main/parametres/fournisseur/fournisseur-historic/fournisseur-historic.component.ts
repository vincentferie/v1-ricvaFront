import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { FournisseurService } from '../fournisseur.service';
import { Fournisseur } from '../fournisseur.model';
import { FournisseurFormComponent } from '../fournisseur-form/fournisseur-form.component';

@Component({
  selector: 'app-fournisseur-historic',
  templateUrl: './fournisseur-historic.component.html',
  styleUrls: ['./fournisseur-historic.component.scss']
})
export class FournisseurHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: false}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(FournisseurFormComponent, {static: false}) set setfournisseurForm(fournisseurForm: FournisseurFormComponent) {
    if (fournisseurForm) {
      this.fournisseurForm = fournisseurForm;
    }
  };
  fournisseurForm: FournisseurFormComponent;
  objectList$: Observable<Fournisseur[]> = this.fournisseurService.objectList$;
  loading$: Observable<boolean> = this.fournisseurService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Fournisseur = null;
  item: Fournisseur = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private fournisseurService: FournisseurService,
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
    this.fournisseurService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'fournisseur', 'create']);
  }

  executeAction(type, item: Fournisseur) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        this.alertDelete(item);
        return this.ricvaDeleteModal.openModal();
    }
  }

  show(item: Fournisseur) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Fournisseur) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Fournisseur) {
    this.idItem = item.id;
  }

  save() {
    this.fournisseurService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.fournisseurService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.fournisseurForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
