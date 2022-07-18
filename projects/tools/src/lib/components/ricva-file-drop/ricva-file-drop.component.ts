import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { FormService } from '../../services/form.service';
import { ToastrService } from '../../services/toastr.service';
import { toastInvalidFileImgPdfMessage, toastInvalidFileMaxSizeMessage } from '../../utils';

@Component({
  selector: 'app-ricva-file-drop',
  templateUrl: './ricva-file-drop.component.html',
  styleUrls: ['./ricva-file-drop.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RicvaFileDropComponent implements OnInit {
  @Input() multiple: boolean;
  @Input() fileExtensions: string[];
  @Input() fileMaxSize: number;
  @Input() fileControl: AbstractControl;
  @Output() fileData: EventEmitter<AbstractControl> = new EventEmitter<AbstractControl>();

  constructor(
    private formService: FormService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() { }

  // Import and verification file
  dropped(files: NgxFileDropEntry[], formField: AbstractControl) {
    this.formService.dropped({
      files, formField, fileExtensions: this.fileExtensions, callbackErrorExtensions: () => this.invalidFileExtensions(),
      fileMaxSize: this.fileMaxSize, callbackErrorMaxSize: () => this.invalidFileMaxSize()
    });
    this.fileData.emit(this.fileControl);
  }

  changed(eventFiles: File[], formField: AbstractControl) {
    this.formService.onFileChange({
      eventFiles, formField, fileExtensions: this.fileExtensions, callbackErrorExtensions: () => this.invalidFileExtensions(),
      fileMaxSize: this.fileMaxSize, callbackErrorMaxSize: () => this.invalidFileMaxSize()
    });
    this.fileData.emit(this.fileControl);
  }

  overred(event) { console.log('over'); }

  leaved(event) { console.log('leave'); }

  invalidFileExtensions() {
    this.toastrService.invalidForm(toastInvalidFileImgPdfMessage);
  }

  invalidFileMaxSize() {
    this.toastrService.invalidForm(toastInvalidFileMaxSizeMessage(this.fileMaxSize));
  }
}
