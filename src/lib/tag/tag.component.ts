import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fab-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class FabricTagComponent {

  @Input() text: string;
  @Output() deleteClicked = new EventEmitter<void>();

  onDeleteClicked() {
    this.deleteClicked.emit();
  }

}
