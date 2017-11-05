import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToggleFullscreenDirective} from "./fullscreen/toggle-fullscreen.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToggleFullscreenDirective],
  exports: [
    ToggleFullscreenDirective
  ],
})
export class SharedModule { }
