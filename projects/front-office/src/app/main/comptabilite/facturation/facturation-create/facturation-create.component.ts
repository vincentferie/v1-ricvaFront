import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { FacturationService } from '../facturation.service';
import { Facturation } from '../facturation.model';
import { FacturationFormComponent } from '../facturation-form/facturation-form.component';

@Component({
  selector: 'app-facturation-create',
  templateUrl: './facturation-create.component.html',
  styleUrls: ['./facturation-create.component.scss']
})
export class FacturationCreateComponent implements OnInit, OnDestroy {
  @ViewChild(FacturationFormComponent, {static: true}) facturationForm: FacturationFormComponent;
  loading$ = this.facturationService.loading$;
  item: Facturation;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private facturationService: FacturationService,
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
    this.facturationService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'facturation', 'historic']);
  }

  reset() {
    this.facturationForm.initForm();
  }
}
