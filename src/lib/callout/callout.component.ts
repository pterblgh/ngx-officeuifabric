import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fab-callout',
    templateUrl: './callout.component.html',
    styleUrls: ['./callout.component.css']
})
export class FabricCalloutComponent implements OnInit {

    ngOnInit(): void {
        console.log(`FabricCalloutComponent initialized`);
    }

}
