import { Base } from 'projects/tools/src/public-api';

export interface Utilisateur extends Base {
  civilite: string;
  nom: string;
  prenoms: string;
  email: string;
  contact: string;
  mpass: string;
}
