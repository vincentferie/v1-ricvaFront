import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService, Valeur, FILE_MAX_SIZE, PICTURE_EXTENSIONS } from 'projects/tools/src/public-api';
import { Membre } from '../membre.model';

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.scss']
})
export class MembreFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Membre;
  @Output() itemChange: EventEmitter<Membre> = new EventEmitter<Membre>();
  createUpdateForm: FormGroup;
  itemSelected: Membre;
  typeMembreList: Valeur[];
  sectionList: Valeur[];
  fileExtensions = PICTURE_EXTENSIONS;
  fileMaxSize = FILE_MAX_SIZE;
  resources = ['types-membre', 'sections'];

  constructor(
    private formService: FormService,
    private resourcesService: ResourcesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.itemSelected = this.item;
    this.initForm();
  }

  get createUpdateControls() {
    return this.createUpdateForm.controls;
  }

  initForm() {
    this.createUpdateForm = this.formBuilder.group({
      typeMembre: [null, Validators.required],
      matricule: [null, Validators.required],
      genre: [null, Validators.required],
      nom: [null, Validators.required],
      prenoms: [null, Validators.required],
      fonction: [null, Validators.required],
      contact: [null, Validators.required],
      dateCreationPlantation: [null, Validators.required],
      superficieTotale: [null, Validators.required],
      estimationProduction: [null, Validators.required],
      estimationAnnee: [null, Validators.required],
      section: [null, Validators.required],
      photo: [null]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const typeMembre = this.typeMembreList.find(item => item.id === this.itemSelected.typeMembre.id);
    const section = this.sectionList.find(item => item.id === this.itemSelected.section.id);
    this.createUpdateForm.patchValue({...this.itemSelected, typeMembre, section});
  }

  setControl(event, formField) {
    this.createUpdateForm.setControl(formField, event);
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.typeMembreList = res[0];
      this.sectionList = res[1];
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
