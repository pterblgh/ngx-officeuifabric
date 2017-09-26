import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbButtonComponent } from './button.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FbButtonComponent
    ],
    exports: [
        FbButtonComponent
    ]
})
export class FbButtonModule { }