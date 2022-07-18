import { Component, Input, OnInit } from '@angular/core';

import { PartSociale } from '../part-sociale.model';

@Component({
  selector: 'app-part-sociale-details',
  templateUrl: './part-sociale-details.component.html',
  styleUrls: ['./part-sociale-details.component.scss']
})
export class PartSocialeDetailsComponent implements OnInit {
  @Input() item: PartSociale;

  constructor() { }

  ngOnInit(): void {
  }

}
