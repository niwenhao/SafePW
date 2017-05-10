import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';
import { PasswordModelService } from '../../service/password-model.service'
import { OpenPaneComponent } from '../open/open-pane'

@Component({
  templateUrl: "auth-list.html"
})
export class AuthList {
  constructor(public appCtl: App, public authService: PasswordModelService) {

  }

  logout(event) {

  }

  move_to(event) {
    this.appCtl.getRootNav().push(OpenPaneComponent);
  }
}
