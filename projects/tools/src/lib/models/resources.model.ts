import { Timestamps } from './timestamps.model';

export interface Base extends Timestamps {
  id: string;
}

export interface Type extends Base {
  code: string;
  libelle: string;
  description: string;
}

export interface Valeur extends Base {
  code: string;
  libelle: string;
  type: Type;
}

export interface Section extends Valeur {
}

export interface Village extends Valeur {
}

export interface ZoneDechargement extends Valeur {
}

export interface TypeVehicule extends Valeur {
}

export interface TypeMembre extends Valeur {
}

export interface TypePersonne extends Valeur {
}

export interface Vehicule extends Base {
  immatriculation: string;
  avantVehicule: string;
  capacite: number;
  typeVehicule: TypeVehicule;
}

export interface Exportateur extends Base {
  code: string;
  civilite: string;
  nom: string;
  prenoms: string;
  email: string;
  contact: string;
}

export interface Transporteur extends Base {
  code: string;
  civilite: string;
  nom: string;
  prenoms: string;
  email: string;
  contact: string;
}

export interface Chauffeur extends Base {
  civilite: string;
  nom: string;
  prenoms: string;
  email: string;
  contact: string;
  numeroPermis: string;
}

export interface District extends Base {
  code: string;
  libelle: string;
  description: string;
}

export interface Region extends Base {
  code: string;
  libelle: string;
  description: string;
  district: District;
}

export interface Departement extends Base {
  code: string;
  libelle: string;
  region: Region;
}

export interface Ville extends Base {
  code: string;
  libelle: string;
  departement: Departement;
}

export interface SousPrefecture extends Ville {
}

export interface Site extends Base {
  libelle: string;
  superficie: string;
  ville: Ville;
  coordonneeX: string;
  coordonneeY: string;
}

export interface PontBascule extends Base {
  libelle: string;
  ville: Ville;
  coordonneeX: string;
  coordonneeY: string;
}

export interface Magasin extends Base {
  libelle: string;
  superficie: string;
  ville: Ville;
  exportateur: Exportateur;
  coordonneeX: string;
  coordonneeY: string;
}

export interface StockProduit extends Base {
  libelle: string;
  stockTheorique: number;
  stockReel: number;
  speculation: Speculation;
}

export interface Fichier extends Base {
  nom: string;
  taille: string;
  type: string;
  dateCreation: Date;
  dateDerniereModification: Date;
}

export interface Speculation extends Base {
  libelle: string;
  usinage: boolean;
}
