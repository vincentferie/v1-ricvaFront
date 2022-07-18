import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { PartSocialeService } from '../part-sociale.service';
import { PartSociale } from '../part-sociale.model';
import { PartSocialeFormComponent } from '../part-sociale-form/part-sociale-form.component';

@Component({
  selector: 'app-part-sociale-create',
  templateUrl: './part-sociale-create.component.html',
  styleUrls: ['./part-sociale-create.component.scss']
})
export class PartSocialeCreateComponent implements OnInit, OnDestroy {
  @ViewChild(PartSocialeFormComponent, {static: true}) partSocialeForm: PartSocialeFormComponent;
  loading$ = this.partSocialeService.loading$;
  item: PartSociale;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private partSocialeService: PartSocialeService,
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
    this.partSocialeService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'part-sociale', 'historic']);
  }

  reset() {
    this.partSocialeForm.initForm();
  }
}
