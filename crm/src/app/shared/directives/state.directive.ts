import { Directive, HostBinding, Input, OnInit, OnChanges } from '@angular/core';
import { StatePrestation } from '../enums/state-prestation.enum';

@Directive({
  selector: '[appState]'
})


export class StateDirective implements OnChanges {

  @Input() appState: StatePrestation;

  @HostBinding('class') nomClass: string;

  ngOnChanges(): void {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  formatClass(appState: StatePrestation): string {
    return `state-${appState.normalize('NFD').replace(/[\u0300-\u036f/s]/g, '').toLowerCase()}`;
  }


}
