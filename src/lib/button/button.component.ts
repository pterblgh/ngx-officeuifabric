import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fab-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class FabricButtonComponent implements OnInit {

    @Input() primary: boolean = false;
    @Input() disabled: boolean = false;

    ngOnInit(): void {
        console.log('Button component successfully created');
    }
}
