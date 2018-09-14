import { Component } from '@angular/core';
import { PwaService } from './pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  version: string;

  pwaEnabled: boolean;
  constructor( private pwaservice: PwaService) {
    this.pwaEnabled = this.pwaservice.privateupdate.isEnabled;

  }
}
