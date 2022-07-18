import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { FileSystemFileEntry } from 'ngx-file-drop';

import { fileHasExtension, fileUnderMaxSize } from '../utils/functions';
import { FormControlField, DroppedFile, ChangedFile } from '../models/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() { }

  markAllAsDirty(form: FormGroup) {
    form.statusChanges.subscribe(value => Object.keys(form.controls).forEach(item => form.controls[item].markAsDirty()));
  }

  paramsBuilder(data) {
    let httpParams = new HttpParams();
    Object.keys(data).forEach(item => httpParams = data[item] ? httpParams.set(item, data[item]) : httpParams);
    return httpParams;
  }

  formDataBuilder(data) {
    const formData = new FormData();
    Object.keys(data).forEach(item => {
      if (data[item] !== undefined && data[item] !== null) {
        if (Array.isArray(data[item])) {
          data[item].forEach(element => formData.append(`${item}[]`, element));
        } else {
          formData.append(item, data[item]);
        }
      }
    });
    return formData;
  }

  onFormChange = (formControlFields: FormControlField) => {
    formControlFields.field.valueChanges.subscribe(value => formControlFields.callback(value));
  }

  onFieldsChange = (formControlFields: FormControlField[]) => {
    formControlFields.forEach(formControlField => formControlField.field.valueChanges.subscribe(value => formControlField.callback(value)));
  }

  dropped = ({
    files, formField, fileExtensions, callbackErrorExtensions, multiple = false, fileMaxSize = null, callbackErrorMaxSize = null
  }: DroppedFile) => {
    if (files && files.length) {
      let fieldFiles = [];
      const droppedFiles = multiple ? files : [files[0]];
      droppedFiles.forEach(droppedFile => {
        // Is it a file?
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            // Here you can access the real file
            fieldFiles = this.getFieldFiles(fieldFiles, file, fileExtensions, callbackErrorExtensions, fileMaxSize, callbackErrorMaxSize);
          });
        } else {
          callbackErrorExtensions();
        }
      });
      formField.patchValue(this.getMultiples(fieldFiles, multiple));
    }
  }

  onFileChange({
    eventFiles, formField, fileExtensions, callbackErrorExtensions, multiple = false, fileMaxSize = null, callbackErrorMaxSize = null
  }: ChangedFile) {
    let fieldFiles = [];
    if (eventFiles && eventFiles.length) {
      const files = multiple ? eventFiles : [eventFiles[0]];
      files.forEach(file => {
        fieldFiles = this.getFieldFiles(fieldFiles, file, fileExtensions, callbackErrorExtensions, fileMaxSize, callbackErrorMaxSize);
      });
      formField.patchValue(this.getMultiples(fieldFiles, multiple));
    }
  }

  protected getMultiples(items, multiple) {
    return multiple ? items : items[0];
  }

  protected getFieldFiles(fieldFiles, file, fileExtensions, callbackErrorExtensions, fileMaxSize = null, callbackErrorMaxSize = null) {
    if (!fileHasExtension(fileExtensions, file)) {
      callbackErrorExtensions();
      return fieldFiles;
    }
    if (fileMaxSize !== null && !fileUnderMaxSize(fileMaxSize, file)) {
      callbackErrorMaxSize();
      return fieldFiles;
    }
    return [...fieldFiles, file];
  }
}
