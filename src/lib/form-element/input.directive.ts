import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: '[fabInput]',
    host: {
        'class': 'fab-input',
        '[class.error]': 'invalid'
    },
    providers: [NgModel]
})
export class FabricInputDirective implements OnInit {

    constructor(
        private _control: NgModel,
        private _elemRef: ElementRef
    ) { }

    ngOnInit() { }

    get required(): boolean {
        return this._elemRef.nativeElement.hasAttribute('required');
    }

    get valid(): boolean | null {
        return this._control.valid;
    }

    get invalid(): boolean | null {
        return this._control.invalid;
    }

}
