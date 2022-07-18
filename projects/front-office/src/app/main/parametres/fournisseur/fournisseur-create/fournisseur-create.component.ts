import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { FournisseurService } from '../fournisseur.service';
import { Fournisseur } from '../fournisseur.model';
import { FournisseurFormComponent } from '../fournisseur-form/fournisseur-form.component';

@Component({
  selector: 'app-fournisseur-create',
  templateUrl: './fournisseur-create.component.html',
  styleUrls: ['./fournisseur-create.component.scss']
})
export class FournisseurCreateComponent implements OnInit, OnDestroy {
  @ViewChild(FournisseurFormComponent, {static: false}) fournisseurForm: FournisseurFormComponent;
  loading$ = this.fournisseurService.loading$;
  item: Fournisseur;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private fournisseurService: FournisseurService,
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
    this.fournisseurService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'fournisseur', 'historic']);
  }

  reset() {
    this.fournisseurForm.initForm();
  }
}
