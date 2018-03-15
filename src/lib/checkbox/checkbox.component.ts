import { Component, Input } from '@angular/core';

@Component({
  selector: 'fab-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class FabricCheckboxComponent {

  @Input() isSelected = false;
  @Input() disabled = false;

  toggleCheckbox(): void {
    if (!this.disabled) {
      this.isSelected = !this.isSelected;
    }
  }

}
