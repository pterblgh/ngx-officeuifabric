import { Component, OnInit, Input, ChangeDetectorRef, Host, Optional, Inject, forwardRef } from '@angular/core';
import { FabricRadioGroupDirective } from './radio-group.directive';

@Component({
  selector: 'fab-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class FabricRadioComponent implements OnInit {

  private static _nextId = 0;

  @Input() label: string;
  @Input() value: any;
  @Input() name: string;
  @Input() checked = false;
  @Input() id = FabricRadioComponent._nextId++;

  constructor( @Optional() @Host() @Inject(forwardRef(() => FabricRadioGroupDirective)) private _radioGroup?: FabricRadioGroupDirective) { }

  ngOnInit(): void {
    console.log(`FabricRadioComponent initialized`);
  }

  onInputChange(event: Event) {
    console.log(event);
  }

  onInputClick(event: Event) {
    console.log(event);
  }

}
