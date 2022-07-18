import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService } from 'src/app/shared/services/form.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.scss']
})
export class UtilisateurFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Utilisateur;
  @Output() itemChange: EventEmitter<Utilisateur> = new EventEmitter<Utilisateur>();
  createUpdateForm: FormGroup;
  itemSelected: Utilisateur;

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
