import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { FacturationService } from '../facturation.service';
import { Facturation } from '../facturation.model';
import { FacturationFormComponent } from '../facturation-form/facturation-form.component';

@Component({
  selector: 'app-facturation-historic',
  templateUrl: './facturation-historic.component.html',
  styleUrls: ['./facturation-historic.component.scss']
})
export class FacturationHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(FacturationFormComponent, {static: true}) facturationForm: FacturationFormComponent;
  objectList$ = this.facturationService.objectList$;
  loading$ = this.facturationService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Facturation = null;
  item: Facturation = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private facturationService: FacturationService,
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
    this.facturationService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'facturation', 'create']);
  }

  executeAction(type, item: Facturation) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Facturation) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Facturation) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Facturation) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.facturationService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.facturationService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.facturationForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
