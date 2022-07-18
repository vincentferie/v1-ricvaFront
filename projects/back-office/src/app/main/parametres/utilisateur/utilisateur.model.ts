import { Timestamps } from 'src/app/shared/models/timestamps.model';
import { Role } from '../role/role.model';

export interface Utilisateur extends Timestamps {
    id: string;
    nom: string;
    prenoms: string;
    email: string;
    contact: string;
    role: Role;
    mpass: string;
}
