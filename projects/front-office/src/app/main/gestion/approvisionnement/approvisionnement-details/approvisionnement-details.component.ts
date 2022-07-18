import { Component, Input, OnInit } from '@angular/core';

import { Approvisionnement } from '../approvisionnement.model';

@Component({
  selector: 'app-approvisionnement-details',
  templateUrl: './approvisionnement-details.component.html',
  styleUrls: ['./approvisionnement-details.component.scss']
})
export class ApprovisionnementDetailsComponent implements OnInit {
  @Input() item: Approvisionnement;

  constructor() { }

  ngOnInit(): void {
  }

}
