import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FbButtonModule } from 'ngx-fabric';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, FbButtonModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }