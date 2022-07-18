import { Component, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';
import { StockLotService } from '../stock-lot.service';

@Component({
  selector: 'app-stock-lot-historic',
  templateUrl: './stock-lot-historic.component.html',
  styleUrls: ['./stock-lot-historic.component.scss']
})
export class StockLotHistoricComponent implements OnInit {
  objectList$ = this.stockLotService.objectList$;
  loading$ = this.stockLotService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'}
  ];
  itemDetails: StockProduit = null;
  open = false;

  constructor(
    private stockLotService: StockLotService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.stockLotService.all().subscribe();
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
