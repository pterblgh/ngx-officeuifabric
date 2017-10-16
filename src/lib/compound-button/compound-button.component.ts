import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fab-compound-button',
    templateUrl: './compound-button.component.html',
    styleUrls: ['./compound-button.component.css']
})
export class FabricCompoundButtonComponent implements OnInit {

    @Input() primary: boolean = false;
    @Input() disabled: boolean = false;
    @Input() description: string;
    @Input() onClick: Function;

    ngOnInit(): void {
        console.log('Compoundbutton component successfully created');
    }

    onButtonClicked(): void {
        return this.onClick();
    }

}