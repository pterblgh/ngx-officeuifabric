import { OverlayRef } from '@angular/cdk/overlay';

export class FabricDialogRef {

  constructor(private _overlayRef: OverlayRef) { }

  close() {
    this._overlayRef.dispose();
  }

}
