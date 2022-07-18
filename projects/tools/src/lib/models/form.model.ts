import { AbstractControl, FormGroup } from '@angular/forms';
import { NgxFileDropEntry } from 'ngx-file-drop';

export interface FormControlField {
    field: AbstractControl|FormGroup;
    callback: any;
}

export interface FormFile {
    formField: AbstractControl;
    fileExtensions: string[];
    callbackErrorExtensions;
    multiple?: boolean;
    fileMaxSize?: number;
    callbackErrorMaxSize?;
}

export interface DroppedFile extends FormFile {
    files: NgxFileDropEntry[];
}

export interface ChangedFile extends FormFile {
    eventFiles: File[];
}