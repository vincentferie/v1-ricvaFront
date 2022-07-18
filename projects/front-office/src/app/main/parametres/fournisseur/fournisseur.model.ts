import { Base, Ville } from 'projects/tools/src/public-api';

export interface Fournisseur extends Base {
  civilite: string;
  nom: string;
  prenoms: string;
  email: string;
  contact: string;
  ville: Ville;
}
