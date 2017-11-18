import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from './dropdown-item.interface';

@Component({
    selector: 'fab-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class FabricDropdownComponent implements OnInit {

    @Input() placeholder: string;
    @Input() label: string;
    @Input() options: DropdownItem[];

    @Output() itemSelected: EventEmitter<DropdownItem>;

    constructor() {
        this.itemSelected = new EventEmitter();
    }

    ngOnInit(): void {
        console.log('FabricDropdownComponent initialized');
    }

}
