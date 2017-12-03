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

  ngAfterContentInit(): void {
    this._radioButtons.forEach(radioButtonComponent => radioButtonComponent.name = this.name);
  }

}
