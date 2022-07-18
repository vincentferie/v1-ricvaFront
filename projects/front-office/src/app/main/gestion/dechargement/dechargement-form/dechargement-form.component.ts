import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

import { Dechargement } from '../dechargement.model';
import { FormService, ResourcesService, Chauffeur, Departement, Exportateur, Magasin, PontBascule, Region, Site, SousPrefecture, StockProduit, Transporteur, Vehicule, Village, Ville, ZoneDechargement } from 'projects/tools/src/public-api';
import { Transport } from '../../../parametres/transport/transport.model';

@Component({
  selector: 'app-dechargement-form',
  templateUrl: './dechargement-form.component.html',
  styleUrls: ['./dechargement-form.component.scss']
})
export class DechargementFormComponent implements OnInit {
  @Input() sections: string[] = [];
  @Input() inputColClass: string;
  @Input() item: Dechargement;
  @Output() itemChange: EventEmitter<Dechargement> = new EventEmitter<Dechargement>();
  createUpdateForm: FormGroup;
  itemSelected: Dechargement;
  zoneDechargementList: ZoneDechargement[];
  pontBasculeList: PontBascule[];
  magasinList: Magasin[];
  siteList: Site[];
  regionList: Region[];
  departementList: Departement[];
  sousPrefectureList: SousPrefecture[];
  villeList: Ville[];
  villageList: Village[];
  exportateurList: Exportateur[];
  transporteurList: Transporteur[];
  transportList: Transport[];
  vehiculeList: Vehicule[];
  chauffeurList: Chauffeur[];
  stockProduitList: StockProduit[];
  origineResources = ['regions', 'departements', 'sous-prefecture', 'sites', 'exportateurs'];
  acheteurResources = ['acheteur'];
  transportResources = ['transporteurs', 'transports', 'vehicules', 'chauffeurs'];
  destinationResources = ['valeurs/search', 'ponts-bascule', 'stocks-produit'];
  destinationParams = [new HttpParams().set('type', 'ZONE_DECHARGEMENT_ID')];

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
      numeroDechargement: [null, Validators.required],
      dateChargement: [null, Validators.required],
      dateDechargement: [null, Validators.required],
      heureDechargement: [null, Validators.required],
      zoneDechargement: [null, Validators.required],
      pontBascule: [null, Validators.required],
      magasin: [null, Validators.required],
      site: [null, Validators.required],
      region: [null, Validators.required],
      departement: [null, Validators.required],
      sousPrefecture: [null, Validators.required],
      ville: [null, Validators.required],
      village: [null, Validators.required],
      exportateur: [null, Validators.required],
      transporteur: [null, Validators.required],
      transport: [null, Validators.required],
      vehicule: [null, Validators.required],
      chauffeur: [null, Validators.required],
      stockProduit: [null, Validators.required],
      nomControlleurTh: [null, Validators.required],
      thDepart: [null, Validators.required],
      nombreSacTonnage: [null, Validators.required],
      nomAcheteur: [null, Validators.required],
      contactAcheteur: [null, Validators.required]
    });
    this.formService.markAllAsDirty(this.createUpdateForm);
    this.formService.onFormChange({field: this.createUpdateForm, callback: value => {
      this.item = this.createUpdateForm.valid ? value : this.item;
      this.itemChange.emit(this.item);
    }});
    this.getDatas();
  }

  patchValueForm() {
    const zoneDechargement = this.zoneDechargementList.find(item => item.id === this.itemSelected.zoneDechargement.id);
    const pontBascule = this.pontBasculeList.find(item => item.id === this.itemSelected.pontBascule.id);
    const magasin = this.magasinList.find(item => item.id === this.itemSelected.magasin.id);
    const site = this.siteList.find(item => item.id === this.itemSelected.site.id);
    const region = this.regionList.find(item => item.id === this.itemSelected.region.id);
    const departement = this.departementList.find(item => item.id === this.itemSelected.departement.id);
    const sousPrefecture = this.sousPrefectureList.find(item => item.id === this.itemSelected.sousPrefecture.id);
    const ville = this.villeList.find(item => item.id === this.itemSelected.ville.id);
    const village = this.villageList.find(item => item.id === this.itemSelected.village.id);
    const exportateur = this.exportateurList.find(item => item.id === this.itemSelected.exportateur.id);
    const transporteur = this.transporteurList.find(item => item.id === this.itemSelected.transporteur.id);
    const transport = this.transportList.find(item => item.id === this.itemSelected.transport.id);
    const vehicule = this.vehiculeList.find(item => item.id === this.itemSelected.vehicule.id);
    const chauffeur = this.chauffeurList.find(item => item.id === this.itemSelected.chauffeur.id);
    const stockProduit = this.stockProduitList.find(item => item.id === this.itemSelected.stockProduit.id);
    this.createUpdateForm.patchValue({...this.itemSelected, zoneDechargement, pontBascule, magasin, site, region, departement, sousPrefecture, ville, village, exportateur, transporteur, transport, vehicule, chauffeur, stockProduit});
  }

  getDatas() {
    if(this.sections.includes('origine')) {
      this.resourcesService.gets(this.origineResources).subscribe((res: any[]) => {
        this.regionList = res[0];
        this.departementList = res[1];
        this.sousPrefectureList = res[2];
        this.villeList = res[2];
        this.villageList = res[2];
        this.siteList = res[3];
        this.exportateurList = res[4];
        if (this.itemSelected) {
          this.patchValueForm();
        }
      });
    }
    if(this.sections.includes('acheteur')) {
      this.resourcesService.gets(this.acheteurResources).subscribe((res: any[]) => {
        this.magasinList = res[0];
        if (this.itemSelected) {
          this.patchValueForm();
        }
      });
    }
    if(this.sections.includes('transport')) {
      this.resourcesService.gets(this.transportResources).subscribe((res: any[]) => {
        this.transporteurList = res[0];
        this.transportList = res[1];
        this.vehiculeList = res[2];
        this.chauffeurList = res[3];
        if (this.itemSelected) {
          this.patchValueForm();
        }
      });
    }
    if(this.sections.includes('destination')) {
      this.resourcesService.gets(this.destinationResources, this.destinationParams).subscribe((res: any[]) => {
        this.zoneDechargementList = res[0];
        this.pontBasculeList = res[1];
        this.stockProduitList = res[2];
        if (this.itemSelected) {
          this.patchValueForm();
        }
      });
    }
  }
}
