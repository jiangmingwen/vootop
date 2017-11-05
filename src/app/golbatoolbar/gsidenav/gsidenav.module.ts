import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsidenavComponent } from './gsidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GsidenavComponent],
  exports:[GsidenavComponent]
})
export class GsidenavModule { }
