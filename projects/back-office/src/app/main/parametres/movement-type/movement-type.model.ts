import { Timestamps } from 'src/app/shared/models/timestamps.model';

export interface MovementType extends Timestamps {
    id: string;
    libelle: string;
}
