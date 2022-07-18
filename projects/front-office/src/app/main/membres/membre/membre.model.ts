import { Base, Fichier, Section, TypeMembre } from 'projects/tools/src/public-api';

export interface Membre extends Base {
  typeMembre: TypeMembre;
  matricule: string;
  genre: string;
  nom: string;
  prenoms: string;
  fonction: string;
  contact: string;
  dateCreationPlantation: Date;
  superficieTotale: number;
  estimationProduction: number;
  estimationAnnee: number;
  section: Section;
  photo: string;
  fichier: Fichier;
}
