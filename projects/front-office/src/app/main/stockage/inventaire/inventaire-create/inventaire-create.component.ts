import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppService } from 'projects/tools/src/public-api';
import { InventaireService } from '../inventaire.service';
import { Inventaire } from '../inventaire.model';
import { InventaireFormComponent } from '../inventaire-form/inventaire-form.component';

@Component({
  selector: 'app-inventaire-create',
  templateUrl: './inventaire-create.component.html',
  styleUrls: ['./inventaire-create.component.scss']
})
export class InventaireCreateComponent implements OnInit {
  @ViewChild(InventaireFormComponent, {static: true}) inventaireForm: InventaireFormComponent;
  loading$ = this.inventaireService.loading$;
  item: Inventaire;
  appUrl: string;
  appUrlSubscription: Subscription;
  cardActions = [
    {label: 'Historique', icon: 'icon-list', class: '', action: () => this.historic()}
  ];

  constructor(
    private inventaireService: InventaireService,
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
    this.inventaireService.create(this.item).subscribe(value => this.historic());
  }

  historic() {
    this.router.navigate(['/', this.appUrl, 'inventaire', 'historic']);
  }

  reset() {
    this.inventaireForm.initForm();
  }
}
