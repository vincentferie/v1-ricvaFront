import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { MembreService } from '../membre.service';
import { Membre } from '../membre.model';
import { MembreFormComponent } from '../membre-form/membre-form.component';

@Component({
  selector: 'app-membre-create',
  templateUrl: './membre-create.component.html',
  styleUrls: ['./membre-create.component.scss']
})
export class MembreCreateComponent implements OnInit, OnDestroy {
  @ViewChild(MembreFormComponent, {static: true}) membreForm: MembreFormComponent;
  loading$ = this.membreService.loading$;
  item: Membre;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private membreService: MembreService,
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
    this.membreService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'membre', 'historic']);
  }

  reset() {
    this.membreForm.initForm();
  }
}
