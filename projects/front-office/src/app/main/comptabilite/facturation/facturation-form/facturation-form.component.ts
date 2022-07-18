import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService } from 'projects/tools/src/public-api';
import { Facturation } from '../facturation.model';
import { Client } from '../../../parametres/client/client.model';

@Component({
  selector: 'app-facturation-form',
  templateUrl: './facturation-form.component.html',
  styleUrls: ['./facturation-form.component.scss']
})
export class FacturationFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Facturation;
  @Output() itemChange: EventEmitter<Facturation> = new EventEmitter<Facturation>();
  createUpdateForm: FormGroup;
  itemSelected: Facturation;
  clientList: Client[];
  resources = ['clients'];

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
      client: [null, Validators.required],
      numero: [null, Validators.required],
      date: [null, Validators.required]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const client = this.clientList.find(item => item.id === this.itemSelected.client.id);
    this.createUpdateForm.patchValue({...this.itemSelected, client});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.clientList = res[0];
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
