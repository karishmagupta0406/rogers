import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VictimRegisterationPage } from '../pages/victim/victim-registeration';
import { VolunteerRegisterationPage } from '../pages/volunteer/volunteer-registeration';
import { AuthServiceProvider } from '../providers/auth.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VictimRegisterationPage,
    VolunteerRegisterationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VictimRegisterationPage,
    VolunteerRegisterationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
