import { Component, OnInit } from '@angular/core';

import { StockProduit } from 'projects/tools/src/public-api';
import { EtatService } from '../etat.service';

@Component({
  selector: 'app-etat-historic',
  templateUrl: './etat-historic.component.html',
  styleUrls: ['./etat-historic.component.scss']
})
export class EtatHistoricComponent implements OnInit {
  objectList$ = this.etatService.objectList$;
  loading$ = this.etatService.loading$;
  actions = [
    {type: 'show', icon: 'icon-eye', title: 'Détails'}
  ];
  itemDetails: StockProduit = null;
  open = false;

  constructor(
    private etatService: EtatService
  ) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.etatService.all().subscribe();
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
