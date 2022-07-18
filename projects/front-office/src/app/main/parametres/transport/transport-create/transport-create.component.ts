import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { TransportService } from '../transport.service';
import { Transport } from '../transport.model';
import { TransportFormComponent } from '../transport-form/transport-form.component';

@Component({
  selector: 'app-transport-create',
  templateUrl: './transport-create.component.html',
  styleUrls: ['./transport-create.component.scss']
})
export class TransportCreateComponent implements OnInit, OnDestroy {
  @ViewChild(TransportFormComponent, {static: true}) transportForm: TransportFormComponent;
  loading$ = this.transportService.loading$;
  item: Transport;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private transportService: TransportService,
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
    this.transportService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'transport', 'historic']);
  }

  reset() {
    this.transportForm.initForm();
  }
}
