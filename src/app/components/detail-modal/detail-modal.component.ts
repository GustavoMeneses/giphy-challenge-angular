import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent {

  @Input() gifUrl: string;

  constructor(
      private modalCtrl: ModalController,
      private sanitizer: DomSanitizer
  ) { }

  sanitizeURL(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
