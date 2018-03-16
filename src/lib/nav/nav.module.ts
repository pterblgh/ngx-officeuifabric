import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FabricNavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [FabricNavComponent],
  exports: [FabricNavComponent],
})
export class FabricNavModule { }
