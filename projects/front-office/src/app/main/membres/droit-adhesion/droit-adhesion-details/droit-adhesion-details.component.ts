import { Component, Input, OnInit } from '@angular/core';

import { DroitAdhesion } from '../droit-adhesion.model';

@Component({
  selector: 'app-droit-adhesion-details',
  templateUrl: './droit-adhesion-details.component.html',
  styleUrls: ['./droit-adhesion-details.component.scss']
})
export class DroitAdhesionDetailsComponent implements OnInit {
  @Input() item: DroitAdhesion;

  constructor() { }

  ngOnInit(): void {
  }

}
