import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { ApprovisionnementService } from '../approvisionnement.service';
import { Approvisionnement } from '../approvisionnement.model';
import { ApprovisionnementFormComponent } from '../approvisionnement-form/approvisionnement-form.component';

@Component({
  selector: 'app-approvisionnement-historic',
  templateUrl: './approvisionnement-historic.component.html',
  styleUrls: ['./approvisionnement-historic.component.scss']
})
export class ApprovisionnementHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(ApprovisionnementFormComponent, {static: true}) approvisionnementForm: ApprovisionnementFormComponent;
  objectList$ = this.approvisionnementService.objectList$;
  loading$ = this.approvisionnementService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: Approvisionnement = null;
  item: Approvisionnement = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private approvisionnementService: ApprovisionnementService,
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
    this.approvisionnementService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'approvisionnement', 'create']);
  }

  executeAction(type, item: Approvisionnement) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Approvisionnement) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Approvisionnement) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Approvisionnement) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.approvisionnementService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.approvisionnementService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.approvisionnementForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
