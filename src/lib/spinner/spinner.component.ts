import { Component, Input, HostBinding } from '@angular/core';
import { SpinnerSize } from './spinner-size.enum';

@Component({
  selector: 'fab-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class FabricSpinnerComponent {

  @Input() label = '';

  @HostBinding('class')
  @Input()
  size = SpinnerSize.Medium;

}
