import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { SocialButtonComponent } from './social-button/social-button.component';
import { createCustomElement} from '@angular/elements';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SocialButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SocialButtonComponent, AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap(app: ApplicationRef) {
    const SocialButtonElement = createCustomElement(SocialButtonComponent , {injector : this.injector});
    customElements.define('social-buttons', SocialButtonElement);
    if (!environment.production) {
      app.bootstrap(AppComponent);
    }
  }


}
