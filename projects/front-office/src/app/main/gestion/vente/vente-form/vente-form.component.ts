import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FormService, ResourcesService, Speculation, StockProduit } from 'projects/tools/src/public-api';
import { Facturation } from '../../../comptabilite/facturation/facturation.model';
import { Client } from '../../../parametres/client/client.model';
import { Vente } from '../vente.model';

@Component({
  selector: 'app-vente-form',
  templateUrl: './vente-form.component.html',
  styleUrls: ['./vente-form.component.scss']
})
export class VenteFormComponent implements OnInit {
  @Input() inputColClass: string;
  @Input() item: Vente;
  @Output() itemChange: EventEmitter<Vente> = new EventEmitter<Vente>();
  createUpdateForm: FormGroup;
  itemSelected: Vente;
  clientList: Client[];
  stockProduitList: StockProduit[];
  speculationList: Speculation[];
  facturationList: Facturation[];
  resources = ['clients', 'stocks-produit', 'factures'];

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
      client: [null, Validators.required],
      stockProduit: [null, Validators.required],
      speculation: [null, Validators.required],
      quantite: [null, Validators.required],
      prix: [null, Validators.required],
      date: [null, Validators.required],
      facturation: [null, Validators.required]
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
    const stockProduit = this.stockProduitList.find(item => item.id === this.itemSelected.stockProduit.id);
    const speculation = this.speculationList.find(item => item.id === this.itemSelected.speculation.id);
    const facturation = this.facturationList.find(item => item.id === this.itemSelected.facturation.id);
    this.createUpdateForm.patchValue({...this.itemSelected, client, stockProduit, speculation, facturation});
  }

  getDatas() {
    this.resourcesService.gets(this.resources).subscribe((res: any[]) => {
      this.clientList = res[0];
      this.stockProduitList = res[1];
      this.speculationList = res[2];
      this.facturationList = res[3];
      if (this.itemSelected) {
        this.patchValueForm();
      }
    });
  }
}
