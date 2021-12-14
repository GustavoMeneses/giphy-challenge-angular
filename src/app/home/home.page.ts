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

  constructor(
      private giphyService: GiphyService,
      private loadingCtrl: LoadingController
  ) {}

  async searchGIPHY() {
    if (this.searchWord.length > 0) {
      const loading = await this.loadingCtrl.create();
      await loading.present();
      this.giphyService.getGiphies(this.searchWord)
          .subscribe((giphies) => {
            console.log(giphies.data);
            this.giphies = giphies.data;
            console.log(this.giphies[0].embed_url);
          }).add(() => loading.dismiss());
    }
  }
}
