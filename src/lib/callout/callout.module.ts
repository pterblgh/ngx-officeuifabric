import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCalloutService } from './callout.service';
import { FabricCalloutComponent } from './callout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricCalloutComponent
  ],
  exports: [
    FabricCalloutComponent
  ],
})
export class FabricCalloutModule { }
