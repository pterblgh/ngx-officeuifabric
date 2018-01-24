import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricRatingComponent } from './rating.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        FabricRatingComponent,
    ],
    exports: [
        FabricRatingComponent,
    ],
})
export class FabricRatingModule { }
