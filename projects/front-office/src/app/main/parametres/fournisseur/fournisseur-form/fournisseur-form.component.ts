import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService, Ville } from 'projects/tools/src/public-api';
import { Fournisseur } from '../fournisseur.model';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.component.html',
  styleUrls: ['./fournisseur-form.component.scss']
})
export class FournisseurFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Fournisseur;
  @Output() itemChange: EventEmitter<Fournisseur> = new EventEmitter<Fournisseur>();
  createUpdateForm: FormGroup;
  itemSelected: Fournisseur;
  villeList: Ville[];
  resources = ['sous-prefecture'];

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
      nom: [null, Validators.required],
      prenoms: [null, Validators.required],
      email: [null, Validators.required],
      contact: [null, Validators.required],
      ville: [null, Validators.required]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const ville = this.villeList.find(item => item.id === this.itemSelected.ville.id);
    this.createUpdateForm.patchValue({...this.itemSelected, ville});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.villeList = res;
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
