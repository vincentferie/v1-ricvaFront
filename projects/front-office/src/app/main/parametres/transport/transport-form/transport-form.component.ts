import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService, Chauffeur, Transporteur, Vehicule } from 'projects/tools/src/public-api';
import { Transport } from '../transport.model';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss']
})
export class TransportFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Transport;
  @Output() itemChange: EventEmitter<Transport> = new EventEmitter<Transport>();
  createUpdateForm: FormGroup;
  itemSelected: Transport;
  vehiculeList: Vehicule[];
  transporteurList: Transporteur[];
  chauffeurList: Chauffeur[];
  resources = ['vehicules', 'transporteurs', 'chauffeurs'];

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
      libelle: [null, Validators.required],
      vehicule: [null, Validators.required],
      transporteur: [null, Validators.required],
      chauffeur: [null, Validators.required]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const vehicule = this.vehiculeList.find(item => item.id === this.itemSelected.vehicule.id);
    const transporteur = this.transporteurList.find(item => item.id === this.itemSelected.transporteur.id);
    const chauffeur = this.chauffeurList.find(item => item.id === this.itemSelected.chauffeur.id);
    this.createUpdateForm.patchValue({...this.itemSelected, vehicule, transporteur, chauffeur});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.vehiculeList = res[0];
      this.transporteurList = res[1];
      this.chauffeurList = res[2];
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
