import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular'
import { Authorization, SendItem, SendMethod, KEY_AUTH_DATA } from '../common-types';

@Component({
  templateUrl: "show-password.html"
})
export class ShowPassword {
  authData: Authorization;

  constructor(
    private navParams: NavParams,
    public appCtl: App
  ) {
    this.authData = this.navParams.get(KEY_AUTH_DATA);
    this.authData.sendItems.forEach((item) => {
      item.displayText = item.hint;
    })
  }

  pressed(item: SendItem) {
    item.displayText = `${item.key}:${item.value}`;
  }

  clicked(item: SendItem) {
    item.displayText = item.hint;
  }

  remove(idx: number) {
    this.authData.sendItems.splice(idx, 1);
  }

  appendSendItem() {
    this.appCtl.getRootNav().push(AppendSendItemView, {[KEY_AUTH_DATA]: this.authData});
  }

  open() {

  }
}

@Component({
  templateUrl: 'append-send-item.view.html'
})
export class AppendSendItemView {
  key: string;
  value: string;
  hint: string;
  authData: Authorization;

  constructor(
    private params: NavParams,
    private app: App
  ) {
    this.authData = this.params.get(KEY_AUTH_DATA);
  }

  appendSendItem() {
    let sendItem: SendItem = {
      key: this.key,
      value: this.value,
      hint: this.hint,
      displayText: this.hint
    };

    this.authData.sendItems.push(sendItem);
    this.app.getRootNav().pop();
  }
}
