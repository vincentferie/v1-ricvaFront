import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { ApprovisionnementService } from '../approvisionnement.service';
import { Approvisionnement } from '../approvisionnement.model';
import { ApprovisionnementFormComponent } from '../approvisionnement-form/approvisionnement-form.component';

@Component({
  selector: 'app-approvisionnement-create',
  templateUrl: './approvisionnement-create.component.html',
  styleUrls: ['./approvisionnement-create.component.scss']
})
export class ApprovisionnementCreateComponent implements OnInit, OnDestroy {
  @ViewChild(ApprovisionnementFormComponent, {static: true}) approvisionnementForm: ApprovisionnementFormComponent;
  loading$ = this.approvisionnementService.loading$;
  item: Approvisionnement;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private approvisionnementService: ApprovisionnementService,
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
    this.approvisionnementService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'approvisionnement', 'historic']);
  }

  reset() {
    this.approvisionnementForm.initForm();
  }
}
