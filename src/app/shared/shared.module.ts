import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleFullscreenDirective } from "./fullscreen/toggle-fullscreen.directive";
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToggleFullscreenDirective, AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective],
  exports: [
    ToggleFullscreenDirective, AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective
  ],
})
export class SharedModule { }
