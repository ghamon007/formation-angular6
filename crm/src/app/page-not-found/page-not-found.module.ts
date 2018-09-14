import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
