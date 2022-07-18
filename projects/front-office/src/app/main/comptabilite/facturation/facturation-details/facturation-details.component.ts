import { Component, Input, OnInit } from '@angular/core';

import { Facturation } from '../facturation.model';

@Component({
  selector: 'app-facturation-details',
  templateUrl: './facturation-details.component.html',
  styleUrls: ['./facturation-details.component.scss']
})
export class FacturationDetailsComponent implements OnInit {
  @Input() item: Facturation;

  constructor() { }

  ngOnInit(): void {
  }

}
