import { Component, Input, OnInit } from '@angular/core';

import { Transport } from '../transport.model';

@Component({
  selector: 'app-transport-details',
  templateUrl: './transport-details.component.html',
  styleUrls: ['./transport-details.component.scss']
})
export class TransportDetailsComponent implements OnInit {
  @Input() item: Transport;

  constructor() { }

  ngOnInit(): void {
  }

}
