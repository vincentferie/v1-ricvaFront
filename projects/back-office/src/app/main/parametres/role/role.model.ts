import { Timestamps } from 'src/app/shared/models/timestamps.model';

export interface Role extends Timestamps {
    id: string;
    libelle: string;
}
