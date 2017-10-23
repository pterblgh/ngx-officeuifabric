import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FabricButtonModule, FabricCompoundButtonModule, FabricCheckboxModule, FabricFormElementModule, FabricTextfieldModule } from 'ngx-fabric';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FabricButtonModule,
    FabricCompoundButtonModule,
    FabricCheckboxModule,
    FabricFormElementModule,
    FabricTextfieldModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
