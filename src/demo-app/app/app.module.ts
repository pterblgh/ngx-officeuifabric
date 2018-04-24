import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FabricButtonModule, FabricCompoundButtonModule, FabricCheckboxModule,
  FabricFormElementModule, FabricTextfieldModule, FabricRatingModule,
  FabricDropdownModule, FabricPersonaModule, FabricTagModule,
  FabricRadioModule, FabricCalloutModule, FabricSpinnerModule, FabricNavModule,
} from 'ngx-officeuifabric';

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
    FabricRadioModule,
    FabricCalloutModule,
    FabricSpinnerModule,
    FabricNavModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
