import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
})
export class DetailModalComponent {

  @Input() gifUrl: string;
  @Input() gifs: any[];
  @Input() amountOfGifs: number;
  @Input() initialIndex: number;
  @Input() paginationOffset: number;
  @Input() searchWord: string;

  constructor(
      private modalCtrl: ModalController,
      private sanitizer: DomSanitizer,
      private giphyService: GiphyService,
  ) {}

  sanitizeURL(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  previous() {
    if (this.initialIndex !== 0) {
      this.initialIndex -= 1;
      this.gifUrl = this.gifs[this.initialIndex].embed_url;
    }
  }

  next() {
    if (this.initialIndex === this.amountOfGifs - 1) {
      this.loadMore();
    } else {
      this.initialIndex += 1;
      this.gifUrl = this.gifs[this.initialIndex].embed_url;
    }
  }

  loadMore() {
    this.giphyService.getGiphies(this.searchWord, this.paginationOffset)
      .subscribe((giphies) => {
        this.gifs = this.gifs.concat(giphies.data);
        this.paginationOffset += giphies.pagination.count;
        this.amountOfGifs = this.gifs.length;
        this.initialIndex += 1;
        this.gifUrl = this.gifs[this.initialIndex].embed_url;
      });
  }
}
