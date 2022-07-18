import { Component, Input, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-stock-lot-details',
  templateUrl: './stock-lot-details.component.html',
  styleUrls: ['./stock-lot-details.component.scss']
})
export class StockLotDetailsComponent implements OnInit {
  @Input() item: StockProduit;

  constructor() { }

  ngOnInit(): void {
  }

}
