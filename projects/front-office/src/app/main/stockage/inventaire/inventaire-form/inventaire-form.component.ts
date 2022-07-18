import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService, Speculation, StockProduit } from 'projects/tools/src/public-api';
import { Inventaire } from '../inventaire.model';

@Component({
  selector: 'app-inventaire-form',
  templateUrl: './inventaire-form.component.html',
  styleUrls: ['./inventaire-form.component.scss']
})
export class InventaireFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Inventaire;
  @Output() itemChange: EventEmitter<Inventaire> = new EventEmitter<Inventaire>();
  createUpdateForm: FormGroup;
  itemSelected: Inventaire;
  stockProduitList: StockProduit[];
  speculationList: Speculation[];
  resources = ['stocks-produit', 'speculations'];

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
      stockProduit: [null, Validators.required],
      speculation: [null, Validators.required],
      quantite: [null, Validators.required],
      nombre_sacs: [null, Validators.required],
      observation: [null, Validators.required]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const stockProduit = this.stockProduitList.find(item => item.id === this.itemSelected.stockProduit.id);
    const speculation = this.speculationList.find(item => item.id === this.itemSelected.speculation.id);
    this.createUpdateForm.patchValue({...this.itemSelected, stockProduit, speculation});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.stockProduitList = res[0];
      this.speculationList = res[1];
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
