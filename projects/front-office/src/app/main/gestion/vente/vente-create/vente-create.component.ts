import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { VenteService } from '../vente.service';
import { Vente } from '../vente.model';
import { VenteFormComponent } from '../vente-form/vente-form.component';

@Component({
  selector: 'app-vente-create',
  templateUrl: './vente-create.component.html',
  styleUrls: ['./vente-create.component.scss']
})
export class VenteCreateComponent implements OnInit, OnDestroy {
  @ViewChild(VenteFormComponent, {static: true}) venteForm: VenteFormComponent;
  loading$ = this.venteService.loading$;
  item: Vente;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private venteService: VenteService,
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
    this.venteService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'vente', 'historic']);
  }

  reset() {
    this.venteForm.initForm();
  }
}
