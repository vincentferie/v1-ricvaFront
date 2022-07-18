import { Base, Chauffeur, Transporteur, Vehicule } from 'projects/tools/src/public-api';

export interface Transport extends Base {
  libelle: string;
  vehicule: Vehicule;
  transporteur: Transporteur;
  chauffeur: Chauffeur;
}
