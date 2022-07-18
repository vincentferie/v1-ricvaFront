import { Component, Input, OnInit } from '@angular/core';

import { Dechargement } from '../dechargement.model';

@Component({
  selector: 'app-dechargement-details',
  templateUrl: './dechargement-details.component.html',
  styleUrls: ['./dechargement-details.component.scss']
})
export class DechargementDetailsComponent implements OnInit {
  @Input() item: Dechargement;

  constructor() { }

  ngOnInit(): void {
  }

}
