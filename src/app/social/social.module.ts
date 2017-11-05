import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule, MatTabsModule, MatSelectModule, MatListModule, MatTableModule
} from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from "@angular/flex-layout";

import { SocialRoutingModule } from './social-routing.module';
import { SocialComponent } from './social/social.component';
import { MyListComponent } from './my-list/my-list.component';
import { StaffGuestComponent } from './staff-guest/staff-guest.component';
import { StaffListComponent } from './staff-list/staff-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    FlexLayoutModule,
    SocialRoutingModule
  ],
  declarations: [SocialComponent, MyListComponent, StaffGuestComponent, StaffListComponent ]
})
export class SocialModule { }
