var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { App, NavParams } from 'ionic-angular';
import { OpenPaneComponent } from '../open/open-pane';
import { SendMethod, KEY_AUTH_DATA, KEY_AUTH_DATA_LIST } from '../common-types';
var authDataList = [
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
];
var AuthListView = (function () {
    function AuthListView(appCtl) {
        this.appCtl = appCtl;
        this.authDataList = authDataList;
    }
    AuthListView.prototype.logout = function (event) {
    };
    AuthListView.prototype.move_to = function (authData) {
        this.appCtl.getRootNav().push(OpenPaneComponent, (_a = {},
            _a[KEY_AUTH_DATA] = authData,
            _a));
        var _a;
    };
    AuthListView.prototype.append_auth = function () {
        this.appCtl.getRootNav().push(AuthAppendView, (_a = {},
            _a[KEY_AUTH_DATA_LIST] = this.authDataList,
            _a));
        var _a;
    };
    return AuthListView;
}());
AuthListView = __decorate([
    Component({
        templateUrl: "auth-list.view.html"
    }),
    __metadata("design:paramtypes", [App])
], AuthListView);
export { AuthListView };
var AuthAppendView = (function () {
    function AuthAppendView(appCtl, params) {
        this.appCtl = appCtl;
        this.authDataList = params.get(KEY_AUTH_DATA_LIST);
    }
    return AuthAppendView;
}());
AuthAppendView = __decorate([
    Component({
        templateUrl: "auth-append.view.html"
    }),
    __metadata("design:paramtypes", [App,
        NavParams])
], AuthAppendView);
export { AuthAppendView };
//# sourceMappingURL=auth.view.js.map