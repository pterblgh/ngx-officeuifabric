import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricFormElementComponent } from './form-element.component';
import { FabricLabelDirective } from './label.directive';
import { FabricInputDirective } from './input.directive';
import { FormElementService } from './form-element.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        FabricFormElementComponent,
        FabricLabelDirective,
        FabricInputDirective,
    ],
    exports: [
        FabricFormElementComponent,
        FabricLabelDirective,
        FabricInputDirective,
    ],
    providers: [
        FormElementService,
    ],
})
export class FabricFormElementModule { }
