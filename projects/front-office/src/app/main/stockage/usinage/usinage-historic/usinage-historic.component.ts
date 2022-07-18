import { Component, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';
import { UsinageService } from '../usinage.service';

@Component({
  selector: 'app-usinage-historic',
  templateUrl: './usinage-historic.component.html',
  styleUrls: ['./usinage-historic.component.scss']
})
export class UsinageHistoricComponent implements OnInit {
  objectList$ = this.usinageService.objectList$;
  loading$ = this.usinageService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'}
  ];
  itemDetails: StockProduit = null;
  open = false;

  constructor(
    private usinageService: UsinageService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.usinageService.all().subscribe();
    this.close();
  }

  executeAction(type, item: StockProduit) {
    switch (type) {
      case 'show':
        return this.show(item);
    }
  }

  show(item: StockProduit) {
    this.itemDetails = item;
    this.open = true;
  }

  close() {
    this.itemDetails = null;
    this.open = false;
  }
}
