import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'label[fabLabel], label[fab-label]',
  host: {
    '[class.required]': '_required',
  },
})
export class FabricLabelDirective implements OnInit {

  private _required: boolean = false;
  private _element: HTMLLabelElement;

  constructor(private _elemRef: ElementRef) {
  }

  ngOnInit() {
    this._element = this._elemRef.nativeElement;
  }

  set required(value: boolean) {
    this._required = value;
  }

  get for(): string {
    return this._element.getAttribute('for') || '';
  }

  set for(value: string) {
    this._element.setAttribute('for', value);
  }

}
