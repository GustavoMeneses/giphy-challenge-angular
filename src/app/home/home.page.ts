import { Component } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchWord = '';
  giphies = [];
  offset = 0;

  constructor(
      private giphyService: GiphyService,
      private loadingCtrl: LoadingController
  ) {
  }

  async listGiphies(offset: number = 0, event = null) {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.giphyService.getGiphies(this.searchWord, offset)
        .subscribe((giphies) => {
          if (offset !== 0) {
            this.giphies = this.giphies.concat(giphies.data);
            this.offset += giphies.pagination.count;
            event.target.complete();
          } else {
            this.giphies = giphies.data;
            this.offset = giphies.pagination.count;
          }
        }).add(() => loading.dismiss());
  }

  async searchGIPHY() {
    if (this.searchWord.length > 0) {
      this.listGiphies();
    }
  }

  scrollGiphies(event) {
    this.listGiphies(this.offset, event);
  }
}
