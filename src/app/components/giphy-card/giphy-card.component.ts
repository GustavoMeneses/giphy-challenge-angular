import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-giphy-card',
  templateUrl: './giphy-card.component.html',
  styleUrls: ['./giphy-card.component.scss'],
})
export class GiphyCardComponent {

  @Input() giphy: any;
  @Output() cardCliked: EventEmitter<any> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {
  }

  sanitizeURL(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  cardClicked() {
    this.cardCliked.emit();
  }
}
