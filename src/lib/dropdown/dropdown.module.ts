import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDropdownComponent } from './dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    imports: [
        CommonModule,
        OverlayModule,
    ],
    declarations: [
        FabricDropdownComponent,
    ],
    exports: [
        FabricDropdownComponent,
    ],
})
export class FabricDropdownModule { }
