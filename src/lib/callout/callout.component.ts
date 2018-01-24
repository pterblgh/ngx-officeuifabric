import { Component, Inject } from '@angular/core';
import { FAB_CALLOUT_CONFIG } from './callout.tokens';
import { CalloutConfig } from './callout-config.interface';
import { OverlayRef } from '@angular/cdk/overlay';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'fab-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css'],
  animations: [
    trigger('callout', [
      transition(':enter', [
        style({transform: 'translate3d(-10px, 0, 0)'}),
        animate('0.367s cubic-bezier(0.1, 0.9, 0.2, 1)'),
      ]),
    ]),
  ],
})
export class FabricCalloutComponent {

  get config(): CalloutConfig {
    return this._config;
  }

  constructor(private _overlayRef: OverlayRef,
              @Inject(FAB_CALLOUT_CONFIG) private _config: CalloutConfig) {
  }

  onCloseClick() {
    this._overlayRef.detach();
  }

}
