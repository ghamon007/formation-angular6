import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrestationInterface } from '../../../shared/interfaces/prestation-interface';
import { StatePrestation } from '../../../shared/enums/state-prestation.enum';
import { TypePrestation } from '../../../shared/enums/type-prestation.enum';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() item: PrestationInterface;
  @Input() index: number;
  stateOptions = Object.values(StatePrestation);
  typeOptions = Object.values(TypePrestation);

  @Output() Out: EventEmitter<any> =  new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  update(event, arg: string) {
    console.log('Emit method');
   this.Out.emit({item : this.item, 'arg' : arg, 'value': event.target.value });
  }
}
