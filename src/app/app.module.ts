import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login'
import { AuthList } from '../pages/authes/auth-list'
import { OpenPaneComponent } from '../pages/open/open-pane'
import { ShowPassword, AppendSendItemView } from '../pages/show/show-password'

import { DataCryptoService } from '../service/data-crypto.service'
import { DataPersistenceService } from '../service/data-persistence.service'
import { PasswordModelService } from '../service/password-model.service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
