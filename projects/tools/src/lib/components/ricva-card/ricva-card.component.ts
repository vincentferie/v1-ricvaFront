import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-ricva-card',
  templateUrl: './ricva-card.component.html',
  styleUrls: ['./ricva-card.component.scss']
})
export class RicvaCardComponent implements OnInit {
  @ViewChild(CardComponent, {static: true}) cardComponent: CardComponent;
  @Input() cardTitle: string;
  @Input() cardClass = '';
  @Input() cardOption = true;
  @Input() cardActions = [];
  @Input() hasRefresh = true;
  @Input() blockClass: string;
  @Input() loadCard: boolean;
  @Output() refresh: EventEmitter<any> = new EventEmitter<any>();

  public fullIcon: string;
  public collapsedIcon: string;

  constructor() {
    this.fullIcon = 'icon-maximize';
    this.collapsedIcon = 'icon-minus';
  }

  ngOnInit() {
  }

  public fullCardToggle(animation: string, status: boolean) {
    this.fullIcon = this.fullIcon === 'icon-minimize' ? 'icon-maximize' : 'icon-minimize';
    this.cardComponent.fullCardToggle(animation, status);
  }

  public collapsedCardToggle() {
    this.collapsedIcon = this.collapsedIcon === 'icon-minus' ? 'icon-plus' : 'icon-minus';
    this.cardComponent.collapsedCardToggle();
  }

  cardRefresh() {
    this.refresh.emit();
  }
}
