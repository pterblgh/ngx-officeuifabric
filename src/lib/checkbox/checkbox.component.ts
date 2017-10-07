import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'fabric-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class FabricCheckboxComponent implements OnInit {

    @Input() isSelected: boolean = false;
    @Input() disabled: boolean = false;
    
    ngOnInit(): void {
        console.log('checkbox component successfully created');
    }

    toggleCheckbox(): void {
        if (!this.disabled) {
            this.isSelected = !this.isSelected;
        }
    }

}