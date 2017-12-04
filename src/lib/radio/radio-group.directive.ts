import { Directive, OnInit, QueryList, AfterViewInit, ContentChildren, Input, AfterContentInit, forwardRef } from '@angular/core';
import { FabricRadioComponent } from './radio.component';

@Directive({
  selector: 'fab-radio-group'
})
export class FabricRadioGroupDirective implements AfterContentInit {

  private static _nextId = 0;

  @Input() name = `fab-radio-group-${FabricRadioGroupDirective._nextId++}`;

  @ContentChildren(forwardRef(() => FabricRadioComponent))
  private readonly _radioButtons: QueryList<FabricRadioComponent>;

  constructor(@Optional() private ngModel: NgModel) { }

  ngAfterContentInit(): void {
    this._radioButtons.forEach(radioButtonComponent => radioButtonComponent.name = this.name);
  }

  private _updateRadioButtons() {
    if (this._radioButtons) {
      this._radioButtons.forEach(radioButtonComponent => {
        const isUpdated = this._updateRadioButton(radioButtonComponent);
        if (isUpdated) {
          radioButtonComponent.markForCheck();
        }
      });
    }
  }


  private _updateRadioButton(radioButtonComponent: FabricRadioComponent): boolean {
    let updated = false;
    if (radioButtonComponent.name !== this.name) {
      radioButtonComponent.name = this.name;
      updated = true;
    }
    if (radioButtonComponent.required !== this.required) {
      radioButtonComponent.required = this.required;
      updated = true;
    }
    if (!radioButtonComponent.disabled && this.disabled) {
      radioButtonComponent.disabled = this.disabled;
      updated = true;
    }
    return updated;
  }
}
