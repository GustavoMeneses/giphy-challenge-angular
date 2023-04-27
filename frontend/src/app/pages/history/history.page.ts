import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  history = [];

  constructor(
      private historyService: HistoryService
  ) {
  }

  async ngOnInit() {
    this.loadHistory();
  }

  async clearHistory() {
    this.historyService.clearHistory()
    .subscribe(() => {
      this.loadHistory();
    });
  }

  loadHistory() {
    this.historyService.getHistory()
      .subscribe((history) => {
        this.history = history.map(h => h.key);
      });
  }
}
