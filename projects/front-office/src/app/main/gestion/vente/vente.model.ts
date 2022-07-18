import { Base, Speculation, StockProduit } from 'projects/tools/src/public-api';
import { Facturation } from '../../comptabilite/facturation/facturation.model';
import { Client } from '../../parametres/client/client.model';

export interface Vente extends Base {
  libelle: string;
  client: Client;
  stockProduit: StockProduit;
  speculation: Speculation;
  quantite: number;
  prix: number;
  date: Date;
  detailFactures: any[];
  facturation: Facturation;
}
