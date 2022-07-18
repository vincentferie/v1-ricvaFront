import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur.model';
import { UtilisateurFormComponent } from '../utilisateur-form/utilisateur-form.component';

@Component({
  selector: 'app-utilisateur-create',
  templateUrl: './utilisateur-create.component.html',
  styleUrls: ['./utilisateur-create.component.scss']
})
export class UtilisateurCreateComponent implements OnInit, OnDestroy {
  @ViewChild(UtilisateurFormComponent, {static: false}) utilisateurForm: UtilisateurFormComponent;
  loading$ = this.utilisateurService.loading$;
  item: Utilisateur;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appUrlSubscription = this.appService.appUrl$.subscribe(appUrl => this.appUrl = appUrl);
  }

  ngOnDestroy() {
    this.appUrlSubscription.unsubscribe();
  }

  save() {
    this.utilisateurService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'utilisateur', 'historic']);
  }

  reset() {
    this.utilisateurForm.initForm();
  }
}
