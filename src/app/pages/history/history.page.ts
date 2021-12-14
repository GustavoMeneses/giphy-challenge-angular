import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  history = [];

  constructor() {
  }

  async ngOnInit() {
    const search = await Storage.get({key: 'search'});
    this.history = search.value.split(',');
  }

}
