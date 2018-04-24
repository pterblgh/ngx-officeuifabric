import { Component, Input } from '@angular/core';

@Component({
  selector: 'fab-compound-button',
  templateUrl: './compound-button.component.html',
  styleUrls: ['./compound-button.component.scss'],
})
export class FabricCompoundButtonComponent {

  @Input() primary = false;
  @Input() disabled = false;
  @Input() description: string;
  @Input() onClick: () => void;

  onButtonClicked(): void {
    return this.onClick();
  }

}
