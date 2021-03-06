import { Component, OnInit, Input, Self, Optional, OnDestroy, HostBinding } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fab-rating',
  styleUrls: ['./rating.component.scss'],
  templateUrl: './rating.component.html',
})
export class FabricRatingComponent implements OnInit, OnDestroy {

  private _currentIndex: number;
  private _subscriptions: Subscription[];

  @Input() min: number;
  @Input() max: number;

  @Input()
  @HostBinding('class.disabled')
  disabled: boolean;

  starStates: string[];

  constructor(@Self() @Optional() public ngControl: NgModel) {
    this.min = 1;
    this.disabled = false;
    this._subscriptions = [];
  }

  ngOnInit() {
    this.starStates = new Array(this.max - this.min + 1).fill('inactive');

    if (this.ngControl && this.ngControl.valueChanges) {
      this._subscriptions.push(
        this.ngControl.valueChanges
          .subscribe((value: number) => {
            value = value > this.max ? this.max : value < this.min ? this.min : value;
            this._currentIndex = value - this.min;
            this.onHover(this._currentIndex, true);
          }),
      );
    } else {
      this._currentIndex = 0;
    }
  }

  onHover(hoverIndex: number, force: boolean = false) {
    if (!this.disabled || force) {
      /** If the mouse points to the same place as before do not recalculate the array */
      if (this.starStates.indexOf('current') === hoverIndex) {
        return;
      }

      this.starStates = this.starStates.map((_value: string, index: number) => {
        if (hoverIndex === index) {
          return 'current';
        }
        return index > hoverIndex ? 'inactive' : 'active';
      });
    }
  }

  onClicked(_event: MouseEvent, index: number) {
    if (!this.disabled) {
      this._currentIndex = index;
      this.ngControl.control.setValue(index + this.min);
    }
  }

  onMouseLeave(_event: MouseEvent) {
    if (!this.disabled) {
      this.starStates = new Array(this.max - this.min + 1)
        .fill('inactive')
        .map((_value, index: number) => index <= this._currentIndex ? 'active' : 'inactive');
    }
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
