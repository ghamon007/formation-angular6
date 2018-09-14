import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full' },
  {path : 'prestations', loadChildren: './prestations/prestations.module#PrestationsModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, preloadingStrategy: PreloadAllModules})  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
