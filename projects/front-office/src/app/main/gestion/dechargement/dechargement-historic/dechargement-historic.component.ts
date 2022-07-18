import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { DechargementService } from '../dechargement.service';
import { Dechargement } from '../dechargement.model';
import { DechargementFormComponent } from '../dechargement-form/dechargement-form.component';

@Component({
  selector: 'app-dechargement-historic',
  templateUrl: './dechargement-historic.component.html',
  styleUrls: ['./dechargement-historic.component.scss']
})
export class DechargementHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(DechargementFormComponent, {static: true}) dechargementForm: DechargementFormComponent;
  objectList$ = this.dechargementService.objectList$;
  loading$ = this.dechargementService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Dechargement = null;
  item: Dechargement = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private dechargementService: DechargementService,
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
    this.dechargementService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'dechargement', 'create']);
  }

  executeAction(type, item: Dechargement) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Dechargement) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Dechargement) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Dechargement) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.dechargementService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.dechargementService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.dechargementForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
