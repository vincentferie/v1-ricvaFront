import { Component, Input, OnInit } from '@angular/core';

import { Fournisseur } from '../fournisseur.model';

@Component({
  selector: 'app-fournisseur-details',
  templateUrl: './fournisseur-details.component.html',
  styleUrls: ['./fournisseur-details.component.scss']
})
export class FournisseurDetailsComponent implements OnInit {
  @Input() item: Fournisseur;

  constructor() { }

  ngOnInit(): void {
  }

}
