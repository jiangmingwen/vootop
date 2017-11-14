import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatTableModule, MatTabsModule,
  MatToolbarModule,
  MatDialogModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatTooltipModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatListModule, MatProgressSpinnerModule, MatPaginatorModule,
} from '@angular/material';

import { NewMenuManageRoutingModule } from './new-menu-manage-routing.module';
import { CategoryListComponent } from './category/category-list.component';
import { ManageCategoryComponent } from './category/manage-category.component';
import { ManageSubCategoryComponent } from './sub-category/manage-sub-category.component';
import { SubCategoryListComponent } from './sub-category/sub-category-list.component';
import { MenuListComponent } from './menu/menu-list.component';
import { ManageMenuComponent } from './menu/manage-menu.component';
import { ManageTaxComponent } from './tax/manage-tax.component';
import { TaxListComponent } from './tax/tax-list.component';
import { MenuHomeComponent } from './menu-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    NewMenuManageRoutingModule,
    CommonModule,
    NewMenuManageRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,

    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,

    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  entryComponents:[
    ManageCategoryComponent,
    ManageMenuComponent,
    ManageTaxComponent,
    ManageSubCategoryComponent,
  ],
  declarations: [CategoryListComponent, ManageCategoryComponent, ManageSubCategoryComponent, SubCategoryListComponent, MenuListComponent, ManageMenuComponent, ManageTaxComponent, TaxListComponent, MenuHomeComponent]
})
export class NewMenuManageModule { }
