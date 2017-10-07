import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FabricButtonModule, FabricCompoundButtonModule, FabricCheckboxModule } from 'ngx-fabric';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, FabricButtonModule, FabricCompoundButtonModule, FabricCheckboxModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }