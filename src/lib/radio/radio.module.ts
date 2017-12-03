import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricRadioComponent } from './radio.component';
import { FabricRadioGroupDirective } from './radio-group.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FabricRadioComponent,
    FabricRadioGroupDirective
  ],
  exports: [
    FabricRadioComponent,
    FabricRadioGroupDirective
  ]
})
export class FabricRadioModule { }
