import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { InputTrackerService } from './input-tracker.service';

@Component({
    selector: 'fabric-textfield',
    templateUrl: './textfield.component.html',
    styleUrls: [ './textfield.component.css' ],
})
export class FabricTextfieldComponent implements OnInit, OnDestroy {

    private _textInputId: number;

    @Input() label: string;
    @Input() placeholder: string = '';
    @Input() required: boolean = false;
    @Input() errorMessage: string = '';
    @Input() underlined: boolean = false;
    @Input() value: string;

    constructor(private inputTrackerService: InputTrackerService) { }

    ngOnInit() {
        this._textInputId = this.inputTrackerService.getIndex();
    }

    get id(): string {
        return `TextInput${this._textInputId}`;
    }

    onChange(_e: any) { /** */ }

    ngOnDestroy() {
        this.inputTrackerService.removeIndex();
    }

}
