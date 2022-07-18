import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.scss']
})
export class ButtonActionsComponent implements OnInit {
  @Input() styleClass: string;
  @Input() btnClass: string;
  @Input() actions: {type: string, icon: string, title: string}[];
  @Output() executeAction: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  run(action: string) {
    this.executeAction.emit(action);
  }
}
