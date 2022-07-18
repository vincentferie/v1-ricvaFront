import { Base } from 'projects/tools/src/public-api';
import { Membre } from '../membre/membre.model';

export interface DroitAdhesion extends Base {
  montant: number;
  membre: Membre;
  dateAdhesion: Date;
}
