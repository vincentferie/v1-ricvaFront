import { Base, Speculation, Ville } from 'projects/tools/src/public-api';
import { Fournisseur } from '../../parametres/fournisseur/fournisseur.model';

export interface Approvisionnement extends Base {
  quantite: number;
  prix: number;
  nombre_sacs: number;
  fournisseur: Fournisseur;
  speculation: Speculation;
  lieuAppro: Ville;
  date: Date;
}
