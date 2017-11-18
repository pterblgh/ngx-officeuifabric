import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDropdownComponent } from './dropdown.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricDropdownComponent
    ],
    exports: [
        FabricDropdownComponent
    ]
})
export class FabricDropdownModule {}