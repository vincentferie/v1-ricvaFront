import { Component, Input, OnInit } from '@angular/core';

import { Membre } from '../membre.model';

@Component({
  selector: 'app-membre-details',
  templateUrl: './membre-details.component.html',
  styleUrls: ['./membre-details.component.scss']
})
export class MembreDetailsComponent implements OnInit {
  @Input() item: Membre;

  constructor() { }

  ngOnInit(): void {
  }

}
