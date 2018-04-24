import {
  Directive, QueryList, ContentChildren, Input,
  AfterContentInit, forwardRef, Optional, Output,
  EventEmitter, OnChanges, SimpleChanges,
} from '@angular/core';
import { FabricRadioComponent } from './radio.component';
import { NgModel } from '@angular/forms';

@Directive({
  selector: 'fab-radio-group',
  exportAs: 'fabRadioGroup',
})
export class FabricRadioGroupDirective implements AfterContentInit, OnChanges {

  private static _nextId = 0;

  private _name = `fab-radio-group-${FabricRadioGroupDirective._nextId++}`;
  private _value: any;

  @ContentChildren(forwardRef(() => FabricRadioComponent))
  private readonly _radioButtons: QueryList<FabricRadioComponent>;

  @Input()
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
    this._updateRadioButtons();
  }

  @Input() required = false;
  @Input() disabled = false;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  set value(value: any) {
    this._value = value;
    this.change.emit(this._value);
    if (this.ngModel) {
      this.ngModel.control.setValue(value);
    }
  }

  constructor(@Optional() private ngModel: NgModel) { }

  ngAfterContentInit(): void {
    this._updateRadioButtons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isFirstChange = Object.keys(changes).reduce((acc, curr) => (acc && changes[curr].isFirstChange()), true);
    if (!isFirstChange) {
      this._updateRadioButtons();
    }
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
