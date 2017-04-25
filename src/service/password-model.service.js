var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { DataPersistenceService } from './data-persistence.service';
import { DataCryptoService } from './data-crypto.service';
var persistName = "password.db";
var PasswordModelService = (function () {
    function PasswordModelService(cryptoService, persistService) {
        this.cryptoService = cryptoService;
        this.persistService = persistService;
    }
    PasswordModelService.prototype.get_password = function (key) {
        var pwd = null;
        this.passwordDatabase.passwords.forEach(function (item) {
            if (item[0] == key) {
                pwd = item[1];
            }
        });
        return pwd;
    };
    PasswordModelService.prototype.set_password = function (key, pwd) {
        var finded = false;
        this.passwordDatabase.passwords.forEach(function (item) {
            if (item[0] == key) {
                item[1] = pwd;
                finded = true;
            }
        });
        if (!finded) {
            this.passwordDatabase.passwords.push([key, pwd]);
        }
    };
    PasswordModelService.prototype.verify_password = function (uid, pwd) {
        var _this = this;
        this.userId = uid;
        this.crypt_key = this.cryptoService.sha256(uid + pwd);
        this.persistService.readText(persistName).then(function (content) {
            var json = _this.cryptoService.decrypt(_this.crypt_key, content);
            var data = JSON.parse(json);
            if (data.owner != _this.userId) {
                throw "Incorrectly user id";
            }
            else {
                _this.passwordDatabase = data;
            }
        }).catch(function (err) {
            _this.passwordDatabase = {
                owner: uid,
                createDate: new Date(Date.now()),
                updateDate: new Date(Date.now()),
                passwords: []
            };
        });
    };
    PasswordModelService.prototype.save_password = function () {
        this.passwordDatabase.updateDate = new Date(Date.now());
        var json = JSON.stringify(this.passwordDatabase);
        var content = this.cryptoService.encrypt(this.crypt_key, json);
        this.persistService.writeText(persistName, content).then(function (content) {
            alert("Saved");
        });
    };
    return PasswordModelService;
}());
PasswordModelService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DataCryptoService,
        DataPersistenceService])
], PasswordModelService);
export { PasswordModelService };
//# sourceMappingURL=password-model.service.js.map