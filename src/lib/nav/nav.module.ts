import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { FabricNavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
  ],
  declarations: [
    FabricNavComponent,
  ],
  exports: [
    FabricNavComponent,
  ],
})
export class FabricNavModule { }
