import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricButtonComponent
    ],
    exports: [
        FabricButtonComponent
    ]
})
export class FabricButtonModule { }
