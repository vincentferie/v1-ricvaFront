import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-slide',
  templateUrl: './modal-slide.component.html',
  styleUrls: ['./modal-slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalSlideComponent implements OnInit {
  @Input() open: boolean;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeSlide() {
    this.close.emit();
  }
}
