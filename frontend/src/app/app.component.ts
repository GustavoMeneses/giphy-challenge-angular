import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
      private router: Router,
      private menuCtrl: MenuController
  ) {}

  async goToHistory() {
    await this.menuCtrl.close();
    await this.router.navigate(['history']);
  }
}
