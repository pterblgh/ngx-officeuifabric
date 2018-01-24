import { Component, Input } from '@angular/core';

@Component({
  selector: 'fab-compound-button',
  templateUrl: './compound-button.component.html',
  styleUrls: ['./compound-button.component.css'],
})
export class FabricCompoundButtonComponent {

  @Input() primary: boolean = false;
  @Input() disabled: boolean = false;
  @Input() description: string;
  @Input() onClick: () => void;

  onButtonClicked(): void {
    return this.onClick();
  }

}
