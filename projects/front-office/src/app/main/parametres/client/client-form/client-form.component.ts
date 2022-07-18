import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService, Valeur } from 'projects/tools/src/public-api';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Client;
  @Output() itemChange: EventEmitter<Client> = new EventEmitter<Client>();
  createUpdateForm: FormGroup;
  itemSelected: Client;
  typePersonneList: Valeur[];
  resources = ['types-personne'];

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
      typePersonne: [null, Validators.required],
      raisonSocial: [null, Validators.required],
      activite: [null, Validators.required],
      rccm: [null, Validators.required],
      cnps: [null, Validators.required],
      siteWeb: [null, Validators.required],
      civilite: [null, Validators.required],
      nom: [null, Validators.required],
      prenoms: [null, Validators.required],
      email: [null, Validators.required],
      contact: [null, Validators.required]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const typePersonne = this.typePersonneList.find(item => item.id === this.itemSelected.typePersonne.id);
    this.createUpdateForm.patchValue({...this.itemSelected, typePersonne});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.typePersonneList = res;
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
