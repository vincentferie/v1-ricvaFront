import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService, RicvaDeleteUiModalComponent } from 'projects/tools/src/public-api';
import { UtilisateurFormComponent } from '../utilisateur-form/utilisateur-form.component';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-utilisateur-historic',
  templateUrl: './utilisateur-historic.component.html',
  styleUrls: ['./utilisateur-historic.component.scss']
})
export class UtilisateurHistoricComponent implements OnInit, OnDestroy {
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
  itemDetails: Utilisateur = null;
  item: Utilisateur = null;
  idItem: string;
  open = false;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Ajouter', icon: 'icon-plus', class: '', action: () => this.add()}
  ];

  constructor(
    private utilisateurService: UtilisateurService,
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
    this.utilisateurService.all().subscribe();
    this.close();
  }

  add() {
    this.router.navigate(['/', this.appUrl, 'utilisateur', 'create']);
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

  show(item: Utilisateur) {
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
