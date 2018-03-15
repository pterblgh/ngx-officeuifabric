import { Directive, ElementRef, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: 'label[fabLabel], label[fab-label]',
})
export class FabricLabelDirective implements OnInit {

  @HostBinding('class.required')
  private _required = false;
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
