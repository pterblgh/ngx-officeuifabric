import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';

@Injectable()
export class FabricDropdownService {

    constructor(private overlay: Overlay) { }
}
