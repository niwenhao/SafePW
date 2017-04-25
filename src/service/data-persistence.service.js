/// <reference types="cordova" />
/// <reference types="cordova-plugin-file" />
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
var DataPersistenceService = (function () {
    function DataPersistenceService() {
    }
    DataPersistenceService.prototype.writeText = function (name, data) {
        return new Promise(function (resolve, reject) {
            window.resolveLocalFileSystemURL(window.cordova.file.dataDirectory, function (entry) {
                entry.getFile(name, {
                    create: true,
                    exclusive: true
                }, function (fileEntry) {
                    fileEntry.createWriter(function (writer) {
                        var blob = new Blob([data], { type: "text/plain" });
                        writer.onwriteend = function (ev) {
                            resolve(data);
                        };
                        writer.onerror = function (ev) {
                            reject(ev);
                        };
                        writer.write(blob);
                    });
                }, function (err) {
                    reject(err);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    DataPersistenceService.prototype.readText = function (name) {
        var rst = new Promise(function (resolve, reject) {
            window.resolveLocalFileSystemURL(window.cordova.file.dataDirectory, function (entry) {
                entry.getFile(name, {
                    create: false,
                    exclusive: true
                }, function (fileEntry) {
                    fileEntry.file(function (file) {
                        var reader = new FileReader();
                        reader.onloadend = function (ev) {
                            resolve(reader.result);
                        };
                        reader.readAsText(file);
                    });
                }, function (err) {
                    reject(err);
                });
            }, function (err) {
                reject(err);
            });
        });
        return rst;
    };
    return DataPersistenceService;
}());
DataPersistenceService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], DataPersistenceService);
export { DataPersistenceService };
//# sourceMappingURL=data-persistence.service.js.map