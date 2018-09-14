import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePrestationsComponent } from './containers/liste-prestations/liste-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ListePrestationsComponent, PrestationComponent, AddPrestationComponent]
})
export class PrestationsModule { }
