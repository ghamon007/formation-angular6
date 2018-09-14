import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { PrestationInterface } from '../../../shared/interfaces/prestation-interface';

@Component({
  selector: 'app-liste-prestations',
  templateUrl: './liste-prestations.component.html',
  styleUrls: ['./liste-prestations.component.scss']
})
export class ListePrestationsComponent implements OnInit {
  collection: PrestationInterface[];
  headers: string[];


  constructor(private prestationService: PrestationService) {
    this.collection = this.prestationService.collection;
    this.headers = [
      'Id',
      'Client',
      'Date début',
      'Date Fin',
      'TJM',
      'Jours',
      'Taxe (%)',
      'Total HT',
      'Total TTC',
      'Statut',
      'Type'];

  }

  ngOnInit() {
  }


  update(event) {
    // console.log(event);
    console.log(event);
    if (event.item && event.item[event.arg]) {
      event.item[event.arg] = event.value;
      console.log(event.item);
    }

  }
}
