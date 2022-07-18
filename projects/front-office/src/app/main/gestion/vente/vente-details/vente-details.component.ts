import { Component, Input, OnInit } from '@angular/core';

import { Vente } from '../vente.model';

@Component({
  selector: 'app-vente-details',
  templateUrl: './vente-details.component.html',
  styleUrls: ['./vente-details.component.scss']
})
export class VenteDetailsComponent implements OnInit {
  @Input() item: Vente;

  constructor() { }

  ngOnInit(): void {
  }

}
