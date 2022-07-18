import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-form',
  templateUrl: './button-form.component.html',
  styleUrls: ['./button-form.component.scss']
})
export class ButtonFormComponent implements OnInit {
  @Input() loading: boolean;
  @Input() disabledSave: boolean;
  @Input() disabledReset: boolean;
  @Input() titleLoading: string;
  @Input() titleSave: string;
  @Input() titleReset: string;
  @Input() saveClass: string;
  @Input() resetClass: string;
  @Input() saveIconClass: string;
  @Input() resetIconClass: string;
  @Output() save: EventEmitter<any> = new EventEmitter(null);
  @Output() reset: EventEmitter<any> = new EventEmitter(null);

  constructor() { }

  ngOnInit() {
  }

  emitSave() {
    this.save.emit(null);
  }

  emitReset() {
    this.reset.emit(null);
  }
}
