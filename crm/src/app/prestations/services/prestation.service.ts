import { Injectable } from '@angular/core';
import { PrestationInterface } from '../../shared/interfaces/prestation-interface';
import { PrestationCollection } from '../fakeCollection';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  constructor() {this.collection = PrestationCollection; }

  private _collection: PrestationInterface[];
  public get collection(): PrestationInterface[] {
    return this._collection;
  }
  public set collection(value: PrestationInterface[]) {
    this._collection = value;
  }

  add(prestation: PrestationInterface) {
    this.collection.push(prestation);
  }


}
