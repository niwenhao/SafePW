import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular'
import { AuthList } from '../authes/auth-list'

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  userId: string;
  password: string;

  constructor(
    public appCtl: App
  ) {
  }

  try_login() {
    if (this.userId == this.password) {
      this.appCtl.getRootNav().setRoot(AuthList);
    }
  }
}
