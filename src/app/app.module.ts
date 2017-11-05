import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GtoolbarComponent} from './golbatoolbar/gtoolbar/gtoolbar.component';
import {NavItemComponent} from './golbatoolbar/navitem/navitem.component';
import {TabGroupComponent} from './golbatoolbar/tab-group/tab-group.component';
import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './shared/material/material.module';
import {SocialModule} from "./social/social.module";
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    GtoolbarComponent,
    NavItemComponent,
    TabGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    SocialModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
