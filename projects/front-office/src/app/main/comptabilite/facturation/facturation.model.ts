import { Base } from 'projects/tools/src/public-api';
import { Client } from '../../parametres/client/client.model';

export interface Facturation extends Base {
  client: Client;
  numero: string;
  date: Date;
}
