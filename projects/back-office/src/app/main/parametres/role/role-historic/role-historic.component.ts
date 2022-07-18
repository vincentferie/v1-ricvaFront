import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { DatatableConfig } from 'src/app/app-config';
import { RicvaDeleteUiModalComponent } from 'src/app/shared/components/app/ricva-delete-ui-modal/ricva-delete-ui-modal.component';
import { RoleFormComponent } from '../role-form/role-form.component';
import { RoleService } from '../role.service';
import { Role } from '../role.model';

@Component({
  selector: 'app-role-historic',
  templateUrl: './role-historic.component.html',
  styleUrls: ['./role-historic.component.scss']
})
export class RoleHistoricComponent implements OnInit {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(RoleFormComponent, {static: false}) set setRoleForm(roleForm: RoleFormComponent) {
    if (roleForm) {
      this.roleForm = roleForm;
    }
  };
  roleForm: RoleFormComponent;
  objectList$ = this.roleService.objectList$;
  loading$ = this.roleService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  dtOptions = DatatableConfig.config;
  itemDetails: Role = null;
  item: Role = null;
  idItem: string;
  open = false;

  constructor(
    private roleService: RoleService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.roleService.all().subscribe();
    this.ricvaDeleteModal.closeModal();
  }

  add() {
    this.open = true;
  }

  executeAction(type, item: Role) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Role = null) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Role) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Role) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.roleService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.roleService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.roleForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
