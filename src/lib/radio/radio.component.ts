import {
  Component,
  Input,
  ChangeDetectorRef,
  Host,
  Optional,
  Inject,
  forwardRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FabricRadioGroupDirective } from './radio-group.directive';

@Component({
  selector: 'fab-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FabricRadioComponent {

  private static _nextId = 0;

  @Input() value: any;
  @Input() name: string;
  @Input() checked = false;
  @Input() required = false;
  @Input() disabled = false;
  @Input() id = FabricRadioComponent._nextId++;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              @Optional() @Host() @Inject(forwardRef(() => FabricRadioGroupDirective)) private _radioGroup?: FabricRadioGroupDirective) {
  }

  markForCheck() {
    this._changeDetectorRef.markForCheck();
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
