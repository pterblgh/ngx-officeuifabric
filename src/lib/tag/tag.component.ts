import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fab-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class FabricTagComponent implements OnInit {

  @Input() text: string;
  @Output() deleteClicked = new EventEmitter<void>();

  ngOnInit(): void {
    console.log(`FabricTagComponent initialized`);
  }

}
