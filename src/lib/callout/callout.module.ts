import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCalloutComponent } from './callout.component';
import { FabricCalloutDirective } from './callout.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricCalloutComponent,
    FabricCalloutDirective
  ],
  exports: [
    FabricCalloutComponent,
    FabricCalloutDirective
  ],
  entryComponents: [
    FabricCalloutComponent
  ]
})
export class FabricCalloutModule { }
