import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FabricTextfieldComponent } from './textfield.component';
import { InputTrackerService } from './input-tracker.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        FabricTextfieldComponent,
    ],
    exports: [
        FabricTextfieldComponent,
    ],
    providers: [
        InputTrackerService,
    ],
})
export class FabricTextfieldModule { }
