import { Component } from '@angular/core';

import { App, NavParams } from 'ionic-angular';
import { OpenPaneComponent } from '../open/open-pane'

import { Authorization, SendMethod, KEY_AUTH_DATA, KEY_AUTH_DATA_LIST } from '../common-types'

const authDataList: Authorization[] = [
  {
    title: "東京三菱UFJ銀行",
    url: "http://online.mufg.co.jp/logon",
    method: SendMethod.POST,
    sendItems: [
      {
        key: "UserID",
        value: "user01",
        hint: "ユーザID"
      },
      {
        key: "Password",
        value: "pass01",
        hint: "パスワード"
      }
    ]
  },
  {
    title: "Gmail",
    url: "http://www.gmail.com/logon",
    method: SendMethod.POST,
    sendItems: [
      {
        key: "UserID",
        value: "user01",
        hint: "ユーザID"
      },
      {
        key: "Password",
        value: "pass01",
        hint: "パスワード"
      }
    ]
  },
  {
    title: "会社ドメイン",
    url: "\\\\development\\",
    method: SendMethod.NEVER,
    sendItems: [
      {
        key: "UserID",
        value: "user01",
        hint: "ユーザID"
      },
      {
        key: "Password",
        value: "pass01",
        hint: "パスワード"
      }
    ]
  }
]

@Component({
  templateUrl: "auth-list.view.html"
})
export class AuthListView {
  authDataList = authDataList;

  constructor(
    private appCtl: App
  ) {
  }

  logout(event) {

  }

  move_to(authData) {
    this.appCtl.getRootNav().push(OpenPaneComponent, {
      [KEY_AUTH_DATA]: authData
    });
  }

  append_auth() {
    this.appCtl.getRootNav().push(AuthAppendView, {
      [KEY_AUTH_DATA_LIST]: this.authDataList
    });
  }
}

@Component({
  templateUrl: "auth-append.view.html"
})
export class AuthAppendView {
  authDataList: Authorization[];

  constructor(
    private appCtl: App,
    params: NavParams
  ) {
    this.authDataList = params.get(KEY_AUTH_DATA_LIST);
  }
}
