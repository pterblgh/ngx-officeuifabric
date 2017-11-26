import { Directive, ElementRef, OnInit} from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: 'input[fabInput], input[fab-input], textarea[fabInput], textarea[fab-input]',
    host: {
        'class': 'fab-input',
        '[class.error]': 'invalid'
    },
    providers: [NgModel]
})
export class FabricInputDirective implements OnInit {

    private _element: HTMLInputElement;

    constructor(
        private _control: NgModel,
        private _elemRef: ElementRef
    ) { }

    ngOnInit() {
        this._element = this._elemRef.nativeElement;
    }

    get required(): boolean {
        return this._elemRef.nativeElement.hasAttribute('required');
    }

    get valid(): boolean | null {
        return this._control.valid;
    }

    get invalid(): boolean | null {
        return this._control.invalid;
    }

    get id(): string {
        return this._element.getAttribute('id') || '';
    }

    set id(value: string) {
        this._element.setAttribute('id', value);
    }

}
