import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><fb-button></fb-button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent  { name = 'ngx-officeuifabric!'; }