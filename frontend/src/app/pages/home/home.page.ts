import { Component } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { DetailModalComponent } from '../../components/detail-modal/detail-modal.component';
import { HistoryService } from 'src/app/services/history.service';

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
      private loadingCtrl: LoadingController,
      private modalCtrl: ModalController,
      private menuCtrl: MenuController,
      private historyService: HistoryService
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
      this.historyService.saveHistory(this.searchWord).subscribe();
      this.listGiphies();
    } else {
      this.giphies = [];
    }
  }

  scrollGiphies(event) {
    this.listGiphies(this.offset, event);
  }

  async openDetailModal(giphy, initialIndex) {
    const amountOfGifs = this.giphies.length;
    const modal = await this.modalCtrl.create({
      component: DetailModalComponent,
      componentProps: {
        gifUrl: giphy.embed_url,
        gifs: this.giphies,
        amountOfGifs,
        initialIndex,
        paginationOffset: this.offset,
        searchWord: this.searchWord
      }
    });
    await modal.present();
  }

  async openMenu() {
    await this.menuCtrl.open();
  }
}
