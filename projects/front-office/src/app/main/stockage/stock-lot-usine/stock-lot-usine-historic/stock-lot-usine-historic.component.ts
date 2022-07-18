import { Component, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';
import { StockLotUsineService } from '../stock-lot-usine.service';

@Component({
  selector: 'app-stock-lot-usine-historic',
  templateUrl: './stock-lot-usine-historic.component.html',
  styleUrls: ['./stock-lot-usine-historic.component.scss']
})
export class StockLotUsineHistoricComponent implements OnInit {
  objectList$ = this.stockLotUsineService.objectList$;
  loading$ = this.stockLotUsineService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'}
  ];
  itemDetails: StockProduit = null;
  open = false;

  constructor(
    private stockLotUsineService: StockLotUsineService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.stockLotUsineService.all().subscribe();
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
