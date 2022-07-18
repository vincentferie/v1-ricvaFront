import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { DechargementService } from '../dechargement.service';
import { Dechargement } from '../dechargement.model';
import { DechargementFormComponent } from '../dechargement-form/dechargement-form.component';

@Component({
  selector: 'app-dechargement-create',
  templateUrl: './dechargement-create.component.html',
  styleUrls: ['./dechargement-create.component.scss']
})
export class DechargementCreateComponent implements OnInit, OnDestroy {
  @ViewChild('origineDechargementForm', {static: true}) origineDechargementForm: DechargementFormComponent;
  @ViewChild('acheteurDechargementForm', {static: true}) acheteurDechargementForm: DechargementFormComponent;
  @ViewChild('transportDechargementForm', {static: true}) transportDechargementForm: DechargementFormComponent;
  @ViewChild('destinationDechargementForm', {static: true}) destinationDechargementForm: DechargementFormComponent;
  loading$ = this.dechargementService.loading$;
  item: Dechargement;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private dechargementService: DechargementService,
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
    this.dechargementService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'dechargement', 'historic']);
  }

  reset() {
    this.origineDechargementForm.initForm();
    this.acheteurDechargementForm.initForm();
    this.transportDechargementForm.initForm();
    this.destinationDechargementForm.initForm();
  }
}
