import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserInterfaceComponent } from './containers/user-interface/user-interface.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, UserInterfaceComponent],
  exports: [ UserInterfaceComponent ]
})
export class UserInterfaceModule { }
