import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService } from 'projects/tools/src/public-api';
import { Membre } from '../../membre/membre.model';
import { DroitAdhesion } from '../droit-adhesion.model';

@Component({
  selector: 'app-droit-adhesion-form',
  templateUrl: './droit-adhesion-form.component.html',
  styleUrls: ['./droit-adhesion-form.component.scss']
})
export class DroitAdhesionFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: DroitAdhesion;
  @Output() itemChange: EventEmitter<DroitAdhesion> = new EventEmitter<DroitAdhesion>();
  createUpdateForm: FormGroup;
  itemSelected: DroitAdhesion;
  membreList: Membre[];
  resources = ['membres'];

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
      montant: [null, Validators.required],
      membre: [null, Validators.required],
      dateAdhesion: [null, Validators.required]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const membre = this.membreList.find(item => item.id === this.itemSelected.membre.id)
    this.createUpdateForm.patchValue({...this.itemSelected, membre});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.membreList = res[0];
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
