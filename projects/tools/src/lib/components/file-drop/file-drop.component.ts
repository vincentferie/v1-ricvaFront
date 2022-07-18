import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileDropComponent implements OnInit {
  @Input() multiple: boolean;
  @Input() placeholder: string;
  @Input() browseTitle: string;
  @Output() fileDrop = new EventEmitter<NgxFileDropEntry[]>();
  @Output() fileOver = new EventEmitter();
  @Output() fileLeave = new EventEmitter();
  @Output() fileChange = new EventEmitter<File[]>();

  constructor() {}

  ngOnInit() {}

  dropped(files: NgxFileDropEntry[]) {
    this.fileDrop.emit(files);
  }

  overred() {
    this.fileOver.emit();
  }

  leaved() {
    this.fileLeave.emit();
  }

  changed(event) {
    const files = event.target.files ? event.target.files : null;
    this.fileChange.emit(files);
  }
}
