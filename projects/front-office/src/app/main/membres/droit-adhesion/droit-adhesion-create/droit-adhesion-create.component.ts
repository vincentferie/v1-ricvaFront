import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { DroitAdhesionService } from '../droit-adhesion.service';
import { DroitAdhesion } from '../droit-adhesion.model';
import { DroitAdhesionFormComponent } from '../droit-adhesion-form/droit-adhesion-form.component';

@Component({
  selector: 'app-droit-adhesion-create',
  templateUrl: './droit-adhesion-create.component.html',
  styleUrls: ['./droit-adhesion-create.component.scss']
})
export class DroitAdhesionCreateComponent implements OnInit, OnDestroy {
  @ViewChild(DroitAdhesionFormComponent, {static: true}) droitAdhesionForm: DroitAdhesionFormComponent;
  loading$ = this.droitAdhesionService.loading$;
  item: DroitAdhesion;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private droitAdhesionService: DroitAdhesionService,
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
    this.droitAdhesionService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'droit-adhesion', 'historic']);
  }

  reset() {
    this.droitAdhesionForm.initForm();
  }
}
