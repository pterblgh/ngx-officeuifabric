import { Component, Input, Inject } from '@angular/core';
import { FAB_CALLOUT_CONFIG } from './callout.tokens';
import { CalloutConfig } from './callout-config.interface';
import { OverlayRef } from '@angular/cdk/overlay';

@Component({
    selector: 'fab-callout',
    templateUrl: './callout.component.html',
    styleUrls: ['./callout.component.css']
})
export class FabricCalloutComponent {

    get config(): CalloutConfig {
        return this._config;
    }

    constructor(
        private _overlayRef: OverlayRef,
        @Inject(FAB_CALLOUT_CONFIG) private _config: CalloutConfig
    ) { }

    onCloseClick() {
        this._overlayRef.detach();
    }

}
