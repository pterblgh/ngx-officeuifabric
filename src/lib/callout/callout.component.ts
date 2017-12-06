import { Component, OnInit, Input, Inject } from '@angular/core';
import { FAB_CALLOUT_CONFIG } from './callout.tokens';
import { CalloutConfig } from './callout-config.interface';

@Component({
    selector: 'fab-callout',
    templateUrl: './callout.component.html',
    styleUrls: ['./callout.component.css']
})
export class FabricCalloutComponent implements OnInit {

    title: string;
    content: string;

    constructor(@Inject(FAB_CALLOUT_CONFIG) private _config: CalloutConfig) {}

    ngOnInit(): void {
        if (this._config) {
            this.title = this._config.title;
            this.content = this._config.content;
        }
    }

}
