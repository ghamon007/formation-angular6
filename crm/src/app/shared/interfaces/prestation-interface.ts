import { StatePrestation } from '../enums/state-prestation.enum';
import { TypePrestation } from '../enums/type-prestation.enum';

export interface PrestationInterface {
  id: string;
  type: TypePrestation;
  client: string;
  date_debut: string;
  date_fin: string;
  tjm_ht: number;
  state: StatePrestation;
  nb_jours: number;
  taxe: number;
totalHT(): number;
totalTTC(): number;

}
