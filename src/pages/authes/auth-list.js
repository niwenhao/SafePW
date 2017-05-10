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
import { App } from 'ionic-angular';
import { PasswordModelService } from '../../service/password-model.service';
import { OpenPaneComponent } from '../open/open-pane';
var AuthList = (function () {
    function AuthList(appCtl, authService) {
        this.appCtl = appCtl;
        this.authService = authService;
    }
    AuthList.prototype.logout = function (event) {
    };
    AuthList.prototype.move_to = function (event) {
        this.appCtl.getRootNav().push(OpenPaneComponent);
    };
    return AuthList;
}());
AuthList = __decorate([
    Component({
        templateUrl: "auth-list.html"
    }),
    __metadata("design:paramtypes", [App, PasswordModelService])
], AuthList);
export { AuthList };
//# sourceMappingURL=auth-list.js.map