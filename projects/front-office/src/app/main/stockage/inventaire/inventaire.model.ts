import { Base, Speculation, StockProduit } from 'projects/tools/src/public-api';

export interface Inventaire extends Base {
  stockProduit: StockProduit;
  speculation: Speculation;
  quantite: number;
  nombre_sacs: number;
  observation: string;
}
