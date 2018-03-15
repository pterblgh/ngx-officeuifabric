import { Component, Input } from '@angular/core';

@Component({
  selector: 'fab-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class FabricButtonComponent {
  @Input() primary: boolean = false;
  @Input() disabled: boolean = false;
}
