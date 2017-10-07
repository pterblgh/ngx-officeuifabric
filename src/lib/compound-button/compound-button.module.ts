import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricCompoundButtonComponent } from './compound-button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FabricCompoundButtonComponent
    ],
    exports: [
        FabricCompoundButtonComponent
    ]
})
export class FabricCompoundButtonModule { }