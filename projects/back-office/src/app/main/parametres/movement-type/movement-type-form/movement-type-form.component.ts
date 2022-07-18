import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService } from 'src/app/shared/services/form.service';
import { MovementType } from '../movement-type.model';

@Component({
  selector: 'app-movement-type-form',
  templateUrl: './movement-type-form.component.html',
  styleUrls: ['./movement-type-form.component.scss']
})
export class MovementTypeFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: MovementType;
  @Output() itemChange: EventEmitter<MovementType> = new EventEmitter<MovementType>();
  createUpdateForm: FormGroup;
  itemSelected: MovementType;

  constructor(private formService: FormService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.itemSelected = this.item;
    this.initForm();
  }

  get createUpdateControls() {
    return this.createUpdateForm.controls;
  }

  initForm() {
    this.createUpdateForm = this.formBuilder.group({
      civilite: [null, Validators.required],
      nom: [null, Validators.required],
      prenoms: [null, Validators.required],
      email: [null, Validators.required],
      contact: [null, Validators.required],
      mpass: [null, Validators.required],
      cmpass: [null, Validators.required],
      verification: [true],
      reinitialisation: [false],
      code: [''],
      expiration: ['']
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    if (this.itemSelected) {
      this.createUpdateForm.removeControl('cmpass');
      this.patchValueForm();
    }
  }

  patchValueForm() {
    this.createUpdateForm.patchValue(this.itemSelected);
  }
}
