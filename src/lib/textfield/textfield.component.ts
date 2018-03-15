import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { InputTrackerService } from './input-tracker.service';

@Component({
  selector: 'fab-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
})
export class FabricTextfieldComponent implements OnInit, OnDestroy {

  private _textInputId: number;

  @Input() label: string;
  @Input() placeholder = '';
  @Input() required = false;
  @Input() errorMessage = '';
  @Input() underlined = false;
  @Input() value: string;

  constructor(private inputTrackerService: InputTrackerService) {
  }

  ngOnInit() {
    this._textInputId = this.inputTrackerService.getIndex();
  }

  get id(): string {
    return `TextInput${this._textInputId}`;
  }

  onChange(_e: any) { /** */
  }

  ngOnDestroy() {
    this.inputTrackerService.removeIndex();
  }

}
