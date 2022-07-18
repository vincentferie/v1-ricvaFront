import { Component, Input, OnInit } from '@angular/core';

import { Inventaire } from '../inventaire.model';

@Component({
  selector: 'app-inventaire-details',
  templateUrl: './inventaire-details.component.html',
  styleUrls: ['./inventaire-details.component.scss']
})
export class InventaireDetailsComponent implements OnInit {
  @Input() item: Inventaire;

  constructor() { }

  ngOnInit(): void {
  }

}
