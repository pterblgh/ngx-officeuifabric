import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FabricButtonModule, FabricCompoundButtonModule, FabricCheckboxModule,
  FabricFormElementModule, FabricTextfieldModule, FabricRatingModule,
  FabricDropdownModule, FabricPersonaModule, FabricTagModule,
  FabricRadioModule
} from 'ngx-fabric';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FabricButtonModule,
    FabricCompoundButtonModule,
    FabricCheckboxModule,
    FabricFormElementModule,
    FabricTextfieldModule,
    FabricRatingModule,
    FabricDropdownModule,
    FabricPersonaModule,
    FabricTagModule,
    FabricRadioModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
