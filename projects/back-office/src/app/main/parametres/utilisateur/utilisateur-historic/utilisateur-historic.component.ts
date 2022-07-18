import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { DatatableConfig } from 'src/app/app-config';
import { RicvaDeleteUiModalComponent } from 'src/app/shared/components/app/ricva-delete-ui-modal/ricva-delete-ui-modal.component';
import { UtilisateurFormComponent } from '../utilisateur-form/utilisateur-form.component';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-utilisateur-historic',
  templateUrl: './utilisateur-historic.component.html',
  styleUrls: ['./utilisateur-historic.component.scss']
})
export class UtilisateurHistoricComponent implements OnInit {
  @ViewChild(RicvaDeleteUiModalComponent, {static: true}) ricvaDeleteModal: RicvaDeleteUiModalComponent;
  @ViewChild(UtilisateurFormComponent, {static: false}) set setUtilisateurForm(utilisateurForm: UtilisateurFormComponent) {
    if (utilisateurForm) {
      this.utilisateurForm = utilisateurForm;
    }
  };
  utilisateurForm: UtilisateurFormComponent;
  objectList$ = this.utilisateurService.objectList$;
  loading$ = this.utilisateurService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'},
    {type: 'update', icon: 'icon-edit', title: 'Modifier'},
    {type: 'delete', icon: 'icon-trash-2', title: 'Supprimer'}
  ];
  dtOptions = DatatableConfig.config;
  itemDetails: Utilisateur = null;
  item: Utilisateur = null;
  idItem: string;
  open = false;

  constructor(
    private utilisateurService: UtilisateurService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.utilisateurService.all().subscribe();
    this.ricvaDeleteModal.closeModal();
  }

  add() {
    this.open = true;
  }

  executeAction(type, item: Utilisateur) {
    switch (type) {
      case 'show':
        return this.show(item);
      case 'update':
        return this.update(item);
      case 'delete':
        return this.alertDelete(item);
    }
  }

  show(item: Utilisateur = null) {
    this.itemDetails = item;
    this.open = true;
  }

  update(item: Utilisateur) {
    this.idItem = item.id;
    this.item = item;
    this.open = true;
  }

  alertDelete(item: Utilisateur) {
    this.idItem = item.id;
    this.ricvaDeleteModal.openModal();
  }

  save() {
    this.utilisateurService.update(this.idItem, this.item).subscribe(value => this.refresh());
  }

  delete() {
    this.utilisateurService.delete(this.idItem).subscribe(value => this.refresh());
  }

  reset() {
    this.utilisateurForm.initForm();
  }

  close() {
    this.itemDetails = null;
    this.item = null;
    this.idItem = null;
    this.open = false;
  }
}
