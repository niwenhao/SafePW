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
import { KEY_AUTH_DATA } from '../common-types';
var ShowPassword = (function () {
    function ShowPassword(navParams, appCtl) {
        this.navParams = navParams;
        this.appCtl = appCtl;
        this.authData = this.navParams.get(KEY_AUTH_DATA);
        this.authData.sendItems.forEach(function (item) {
            item.displayText = item.hint;
        });
    }
    ShowPassword.prototype.pressed = function (item) {
        item.displayText = item.key + ":" + item.value;
    };
    ShowPassword.prototype.clicked = function (item) {
        item.displayText = item.hint;
    };
    ShowPassword.prototype.remove = function (idx) {
        this.authData.sendItems.splice(idx, 1);
    };
    ShowPassword.prototype.appendSendItem = function () {
        this.appCtl.getRootNav().push(AppendSendItemView, (_a = {}, _a[KEY_AUTH_DATA] = this.authData, _a));
        var _a;
    };
    ShowPassword.prototype.open = function () {
    };
    return ShowPassword;
}());
ShowPassword = __decorate([
    Component({
        templateUrl: "show-password.html"
    }),
    __metadata("design:paramtypes", [NavParams,
        App])
], ShowPassword);
export { ShowPassword };
var AppendSendItemView = (function () {
    function AppendSendItemView(params, app) {
        this.params = params;
        this.app = app;
        this.authData = this.params.get(KEY_AUTH_DATA);
    }
    AppendSendItemView.prototype.appendSendItem = function () {
        var sendItem = {
            key: this.key,
            value: this.value,
            hint: this.hint,
            displayText: this.hint
        };
        this.authData.sendItems.push(sendItem);
        this.app.getRootNav().pop();
    };
    return AppendSendItemView;
}());
AppendSendItemView = __decorate([
    Component({
        templateUrl: 'append-send-item.view.html'
    }),
    __metadata("design:paramtypes", [NavParams,
        App])
], AppendSendItemView);
export { AppendSendItemView };
//# sourceMappingURL=show-password.js.map