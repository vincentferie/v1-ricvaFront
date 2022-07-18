import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

import { UiModalComponent } from '../modal/ui-modal/ui-modal.component';

@Component({
  selector: 'app-ricva-delete-ui-modal',
  templateUrl: './ricva-delete-ui-modal.component.html',
  styleUrls: ['./ricva-delete-ui-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RicvaDeleteUiModalComponent implements OnInit {
  @ViewChild(UiModalComponent, {static: true}) deleteModal: UiModalComponent;
  @Input() loading: boolean;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.deleteModal.hide();
    this.close.emit(null);
  }

  openModal() {
    this.deleteModal.show();
    this.open.emit(null);
  }

  confirmModal() {
    this.delete.emit(null);
  }
}
