import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { formatInputDate, FormService, ResourcesService, Speculation, Ville } from 'projects/tools/src/public-api';
import { Approvisionnement } from '../approvisionnement.model';
import { Fournisseur } from '../../../parametres/fournisseur/fournisseur.model';

@Component({
  selector: 'app-approvisionnement-form',
  templateUrl: './approvisionnement-form.component.html',
  styleUrls: ['./approvisionnement-form.component.scss']
})
export class ApprovisionnementFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Approvisionnement;
  @Output() itemChange: EventEmitter<Approvisionnement> = new EventEmitter<Approvisionnement>();
  createUpdateForm: FormGroup;
  itemSelected: Approvisionnement;
  fournisseurList: Fournisseur[];
  speculationList: Speculation[];
  lieuApproList: Ville[];
  resources = ['fournisseurs', 'speculations', 'sous-prefecture'];

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
      quantite: [null, Validators.required],
      prix: [null, Validators.required],
      nombre_sacs: [null, Validators.required],
      fournisseur: [null, Validators.required],
      speculation: [null, Validators.required],
      lieuAppro: [null, Validators.required],
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
    const fournisseur = this.fournisseurList.find(item => item.id === this.itemSelected.fournisseur.id);
    const speculation = this.speculationList.find(item => item.id === this.itemSelected.speculation.id);
    const lieuAppro = this.lieuApproList.find(item => item.id === this.itemSelected.lieuAppro.id);
    this.createUpdateForm.patchValue({...this.itemSelected, date: formatInputDate(this.itemSelected.date), fournisseur, speculation, lieuAppro});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe(res => {
      this.fournisseurList = res[0];
      this.speculationList = res[1];
      this.lieuApproList = res[2];
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
