import { Component, ContentChild, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { FabricInputDirective } from './input.directive';
import { FabricLabelDirective } from './label.directive';

@Component({
    selector: 'fab-form-element',
    templateUrl: './form-element.component.html',
    styleUrls: [ './form-element.component.css' ],
    host: {
        'class': 'fab-form-container'
    },
    encapsulation: ViewEncapsulation.None
})
export class FabricFormElementComponent implements AfterContentInit {

    @ContentChild(FabricLabelDirective) private _labelElement: FabricLabelDirective;
    @ContentChild(FabricInputDirective) private _inputElement: FabricInputDirective;

    ngAfterContentInit() {
        if (!this._inputElement) {
            console.error('input element not declared');
        }
    }

}