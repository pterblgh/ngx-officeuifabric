import { Component, OnInit, Input } from '@angular/core';
import { PersonaPillSize } from './persona-pill-size.enum';

@Component({
  selector: 'fab-persona-pill',
  templateUrl: './persona-pill.component.html',
  styleUrls: ['./persona-pill.component.css'],
  host: {
    '[class]': 'size'
  }
})
export class FabricPersonaPillComponent implements OnInit {

  @Input() size: PersonaPillSize;

  ngOnInit(): void {
    console.log(`FabricPersonaPillComponent initialized`);
  }

}
