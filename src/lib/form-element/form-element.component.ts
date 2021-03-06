import { Component, ContentChild, AfterContentInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { FabricInputDirective } from './input.directive';
import { FabricLabelDirective } from './label.directive';
import { FormElementService } from './form-element.service';

@Component({
  selector: 'fab-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FabricFormElementComponent implements AfterContentInit {

  @ContentChild(FabricLabelDirective) private _labelElement: FabricLabelDirective;
  @ContentChild(FabricInputDirective) private _inputElement: FabricInputDirective;

  @HostBinding('class') formContainerClass = 'fab-form-container';

  constructor(private _formElementService: FormElementService) {
  }

  ngAfterContentInit() {
    this._labelElement.required = this._inputElement.required;
    if (this._labelElement.for !== this._inputElement.id) {
      const id = `FabFormElement${this._formElementService.uniqueId}`;
      this._labelElement.for = id;
      this._inputElement.id = id;
    }
  }

}
