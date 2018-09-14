import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './components/tab/tab.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabComponent, TotalPipe, StateDirective],
  exports: [TabComponent, TotalPipe, StateDirective]
})
export class SharedModule { }
