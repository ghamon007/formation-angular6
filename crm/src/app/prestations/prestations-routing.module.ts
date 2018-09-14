import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePrestationsComponent } from './containers/liste-prestations/liste-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';

const routes: Routes = [
  {path : '', component: ListePrestationsComponent },
  {path : 'add', component: AddPrestationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)  ],
  exports: [ RouterModule ]
})
export class PrestationsRoutingModule { }
