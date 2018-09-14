import { PrestationInterface } from '../interfaces/prestation-interface';
import { StatePrestation } from '../enums/state-prestation.enum';
import { TypePrestation } from '../enums/type-prestation.enum';

export class Prestation implements PrestationInterface {
  id: string;
  type: TypePrestation = TypePrestation.PRESTATION;
  client: string;
  date_debut: string = new Date().toISOString();
  date_fin: string;
  tjm_ht = 0;
  state =  StatePrestation.OPTION;
  nb_jours = 0;
  taxe = 20; // 20%

constructor(fields?: Partial<Prestation>) {
  if (fields) {
    Object.assign(this, fields);
  }
}


  totalHT(): number {
    console.log('Appel a totalHT');
    return this.nb_jours * this.tjm_ht;
  }
  totalTTC(): number {
     return this.totalHT() * (1 + this.taxe / 100);
  }


}
