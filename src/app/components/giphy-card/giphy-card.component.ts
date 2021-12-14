import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-giphy-card',
  templateUrl: './giphy-card.component.html',
  styleUrls: ['./giphy-card.component.scss'],
})
export class GiphyCardComponent {

  @Input() giphy: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  sanitizeURL(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
