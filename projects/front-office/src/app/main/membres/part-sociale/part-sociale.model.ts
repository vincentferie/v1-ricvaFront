import { Base } from 'projects/tools/src/public-api';
import { Membre } from '../membre/membre.model';

export interface PartSociale extends Base {
  montant: number;
  membre: Membre;
  nombrePart: number;
}
