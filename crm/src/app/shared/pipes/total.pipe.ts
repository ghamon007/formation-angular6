import { Pipe, PipeTransform } from '@angular/core';
import { PrestationInterface } from '../interfaces/prestation-interface';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: PrestationInterface, args?: boolean): string | number {
    if (!value) {
      return '';
    }
    if (args) {
      // true pour Total TTC
      return value.totalTTC();
    } else {
      // false pour Total HT
      return value.totalHT();
    }
  }
}
