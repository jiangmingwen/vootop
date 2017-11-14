import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material/material.module';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatSelectModule, MatSidenavModule, MatTabsModule, MatToolbarModule,
  MatProgressBarModule,MatSnackBarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialModule } from './social/social.module';
import { AppMenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth-guard.service';
import { VootopHttpService } from './shared/vootop-http.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    MatSnackBarModule,
    MatProgressBarModule,
    SocialModule,
    HttpModule
  ],
  providers: [AuthGuard,VootopHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
