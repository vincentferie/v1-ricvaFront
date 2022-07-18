import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { DatatableConfig } from 'src/app/app-config';
import { RicvaDeleteUiModalComponent } from 'src/app/shared/components/app/ricva-delete-ui-modal/ricva-delete-ui-modal.component';
import { MovementTypeFormComponent } from '../movement-type-form/movement-type-form.component';
import { MovementTypeService } from '../movement-type.service';
import { MovementType } from '../movement-type.model';

@Component({
  selector: 'app-movement-type-historic',
  templateUrl: './movement-type-historic.component.html',
  styleUrls: ['./movement-type-historic.component.scss']
})
export class MovementTypeHistoricComponent implements OnInit {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(MovementTypeFormComponent, {static: false}) set setmovementTypeForm(movementTypeForm: MovementTypeFormComponent) {
    if (movementTypeForm) {
      this.movementTypeForm = movementTypeForm;
    }
  };
  movementTypeForm: MovementTypeFormComponent;
  objectList$ = this.movementTypeService.objectList$;
  loading$ = this.movementTypeService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  dtOptions = DatatableConfig.config;
  itemDetails: MovementType = null;
  item: MovementType = null;
  idItem: string;
  open = false;

  constructor(
    private movementTypeService: MovementTypeService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.movementTypeService.all().subscribe();
    this.ricvaDeleteModal.closeModal();
  }

  add() {
    this.open = true;
  }

  executeAction(type, item: MovementType) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: MovementType = null) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: MovementType) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: MovementType) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.movementTypeService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.movementTypeService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.movementTypeForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
