import { Component, Input, OnInit } from '@angular/core';

import { MovementType } from '../movement-type.model';

@Component({
  selector: 'app-movement-type-details',
  templateUrl: './movement-type-details.component.html',
  styleUrls: ['./movement-type-details.component.scss']
})
export class MovementTypeDetailsComponent implements OnInit {
  @Input() item: MovementType;

  constructor() { }

  ngOnInit(): void {
  }

}
