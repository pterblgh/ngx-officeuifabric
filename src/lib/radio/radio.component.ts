import { Component, Input, ChangeDetectorRef, Host, Optional, Inject, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { FabricRadioGroupDirective } from './radio-group.directive';

@Component({
  selector: 'fab-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class FabricRadioComponent {

  private static _nextId = 0;

  @Input() label: string;
  @Input() value: any;
  @Input() name: string;
  @Input() checked = false;
  @Input() required = false;
  @Input() disabled = false;
  @Input() id = FabricRadioComponent._nextId++;

  constructor( @Optional() @Host() @Inject(forwardRef(() => FabricRadioGroupDirective)) private _radioGroup?: FabricRadioGroupDirective) { }

  }

  onInputChange(event: Event) {
    event.stopPropagation();

    if (this._radioGroup) {
      this._radioGroup.value = this.value;
    }
  }

  onInputClick(event: MouseEvent) {
    event.stopPropagation();
  }

}
