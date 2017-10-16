import { Directive } from "@angular/core";

@Directive({
    selector: '[fabLabel]',
    host: {
        '[class.required]': '_required'
    }
})
export class FabricLabelDirective {

    private _required: boolean = false;

    set required(value: boolean) {
        this._required = value;
    }

}
