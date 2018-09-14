import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { createCustomElement} from '@angular/elements';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [AuthComponent, AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(app: ApplicationRef) {
    const authElement = createCustomElement(AuthComponent , {injector : this.injector});
    customElements.define('auth-form', authElement);
    if (!environment.production) {
      app.bootstrap(AppComponent);
    }
  }


}
