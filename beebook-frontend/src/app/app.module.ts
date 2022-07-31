import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { OwnPageComponent } from './own-page/own-page.component';
import { FavPageComponent } from './fav-page/fav-page.component';
import { HiveDetailComponent } from './hive-detail/hive-detail.component';
import { OtherPageComponent } from './other-page/other-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MainPageComponent,
    OwnPageComponent,
    FavPageComponent,
    HiveDetailComponent,
    OtherPageComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
