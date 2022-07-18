import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-wizard',
  templateUrl: './button-wizard.component.html',
  styleUrls: ['./button-wizard.component.scss']
})
export class ButtonWizardComponent implements OnInit {
  @Input() hasNext: boolean;
  @Input() hasPrev: boolean;
  @Input() titleNext: string;
  @Input() titlePrev: string;
  @Input() nextClass: string;
  @Input() prevClass: string;
  @Input() nextIconClass: string;
  @Input() prevIconClass: string;

  constructor() { }

  ngOnInit(): void {
  }
}
