
import { Base, Chauffeur, Departement, Exportateur, Magasin, PontBascule, Region, Site, SousPrefecture, StockProduit, Transporteur, Vehicule, Village, Ville, ZoneDechargement } from 'projects/tools/src/public-api';
import { Transport } from '../../parametres/transport/transport.model';

export interface Dechargement extends Base {
  numeroDechargement: number;
  dateChargement: Date;
  dateDechargement: Date;
  heureDechargement: string;
  zoneDechargement: ZoneDechargement;
  pontBascule: PontBascule;
  magasin: Magasin;
  site: Site;
  region: Region;
  departement: Departement;
  sousPrefecture: SousPrefecture;
  ville: Ville;
  village: Village;
  exportateur: Exportateur;
  transporteur: Transporteur;
  transport: Transport;
  vehicule: Vehicule;
  chauffeur: Chauffeur;
  stockProduit: StockProduit;
  nomControlleurTh: string;
  thDepart: string;
  nombreSacTonnage: number;
  nomAcheteur: string;
  contactAcheteur: number;
}
