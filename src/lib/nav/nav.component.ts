import { Component, Input } from '@angular/core';

@Component({
  selector: 'fab-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class FabricNavComponent {

  @Input() appName: string;
  @Input() fixed = true;

}
