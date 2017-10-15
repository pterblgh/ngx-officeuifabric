import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricFormElementComponent } from './form-element.component';
import { FabricLabelDirective } from './label.directive';
import { FabricInputDirective } from './input.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricFormElementComponent,
        FabricLabelDirective,
        FabricInputDirective
    ],
    exports: [
        FabricFormElementComponent,
        FabricLabelDirective,
        FabricInputDirective
    ]
})
export class FabricFormElementModule { }
