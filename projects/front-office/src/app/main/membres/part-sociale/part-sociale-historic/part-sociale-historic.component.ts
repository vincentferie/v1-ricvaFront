import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { PartSocialeService } from '../part-sociale.service';
import { PartSociale } from '../part-sociale.model';
import { PartSocialeFormComponent } from '../part-sociale-form/part-sociale-form.component';

@Component({
  selector: 'app-part-sociale-historic',
  templateUrl: './part-sociale-historic.component.html',
  styleUrls: ['./part-sociale-historic.component.scss']
})
export class PartSocialeHistoricComponent implements OnInit, OnDestroy {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(PartSocialeFormComponent, {static: true}) partSocialeForm: PartSocialeFormComponent;
  objectList$ = this.partSocialeService.objectList$;
  loading$ = this.partSocialeService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  itemDetails: PartSociale = null;
  item: PartSociale = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private partSocialeService: PartSocialeService,
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
    this.partSocialeService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'part-sociale', 'create']);
  }

  executeAction(type, item: PartSociale) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: PartSociale) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: PartSociale) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: PartSociale) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.partSocialeService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.partSocialeService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.partSocialeForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
