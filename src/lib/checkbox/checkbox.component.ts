import { Component, Input } from '@angular/core';

@Component({
    selector: 'fab-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css'],
})
export class FabricCheckboxComponent {

    @Input() isSelected: boolean = false;
    @Input() disabled: boolean = false;

    toggleCheckbox(): void {
        if (!this.disabled) {
            this.isSelected = !this.isSelected;
        }
    }

}
