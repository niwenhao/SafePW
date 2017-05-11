var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { AuthList } from '../pages/authes/auth-list';
import { OpenPaneComponent } from '../pages/open/open-pane';
import { ShowPassword, AppendSendItemView } from '../pages/show/show-password';
import { DataCryptoService } from '../service/data-crypto.service';
import { DataPersistenceService } from '../service/data-persistence.service';
import { PasswordModelService } from '../service/password-model.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            LoginPage,
            AuthList,
            OpenPaneComponent,
            ShowPassword,
            AppendSendItemView
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            AboutPage,
            LoginPage,
            AuthList,
            OpenPaneComponent,
            ShowPassword,
            AppendSendItemView
        ],
        providers: [
            StatusBar,
            SplashScreen,
            DataCryptoService,
            DataPersistenceService,
            PasswordModelService,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map