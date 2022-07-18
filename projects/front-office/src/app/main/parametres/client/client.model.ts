import { Base, Valeur } from 'projects/tools/src/public-api';

export interface Client extends Base {
  civilite: string;
  nom: string;
  prenoms: string;
  email: string;
  contact: string;
  raisonSocial: string;
  activite: string;
  rccm: string;
  cnps: string;
  siteWeb: string;
  typePersonne: Valeur;
}
