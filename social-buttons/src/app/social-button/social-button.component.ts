import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.css']
})
export class SocialButtonComponent implements OnChanges {

  @Input() link: string;
  @Input() provider: string;

  providerClass: string;

  constructor() { }

  ngOnChanges() {
    this.providerClass = `fab fa-${this.provider}`;
  }

}
