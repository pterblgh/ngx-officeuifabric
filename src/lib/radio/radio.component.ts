import { Component, OnInit, Input } from '@angular/core';
import { RadioLabelDirection } from './radio-label-direction.enum';

@Component({
  selector: 'fab-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class FabricRadioComponent implements OnInit {

  private static _nextId = -1;

  @Input() label: string;
  @Input() value: any;
  @Input() name: string;
  @Input() checked = false;
  @Input() labelDirection: RadioLabelDirection;
  @Input() id = ++FabricRadioComponent._nextId;

  ngOnInit(): void {
    console.log(`FabRadioComponent initialized`);
  }

  onInputChange(event: Event) {
    console.log(event);
  }

  onInputClick(event: Event) {
    console.log(event);
  }

}
