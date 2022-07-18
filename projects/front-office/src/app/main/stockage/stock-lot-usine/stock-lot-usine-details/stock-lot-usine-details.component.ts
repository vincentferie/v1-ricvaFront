import { Component, Input, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-stock-lot-usine-details',
  templateUrl: './stock-lot-usine-details.component.html',
  styleUrls: ['./stock-lot-usine-details.component.scss']
})
export class StockLotUsineDetailsComponent implements OnInit {
  @Input() item: StockProduit;

  constructor() { }

  ngOnInit(): void {
  }

}
