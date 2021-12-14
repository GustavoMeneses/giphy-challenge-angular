import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  history = [];

  constructor(
      private cd: ChangeDetectorRef
  ) {
  }

  async ngOnInit() {
    const search = await Storage.get({key: 'search'});
    if (search.value){
      this.history = search.value.split(',');
    }
  }

  async clearHistory() {
    await Storage.clear();
    this.history = [];
    this.cd.detectChanges();
  }
}
