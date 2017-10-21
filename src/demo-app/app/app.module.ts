import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FabricButtonModule, FabricCompoundButtonModule, FabricCheckboxModule, FabricFormElementModule, FabricTextfieldModule } from 'ngx-fabric';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FabricButtonModule,
    FabricCompoundButtonModule,
    FabricCheckboxModule,
    FabricFormElementModule,
    FabricTextfieldModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }