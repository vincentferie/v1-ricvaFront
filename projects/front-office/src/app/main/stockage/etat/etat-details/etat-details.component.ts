import { Component, Input, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';

@Component({
  selector: 'app-etat-details',
  templateUrl: './etat-details.component.html',
  styleUrls: ['./etat-details.component.scss']
})
export class EtatDetailsComponent implements OnInit {
  @Input() item: StockProduit;

  constructor() { }

  ngOnInit(): void {
  }

}
