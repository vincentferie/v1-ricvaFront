import { Component, Input, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-usinage-details',
  templateUrl: './usinage-details.component.html',
  styleUrls: ['./usinage-details.component.scss']
})
export class UsinageDetailsComponent implements OnInit {
  @Input() item: StockProduit;

  constructor() { }

  ngOnInit(): void {
  }

}
