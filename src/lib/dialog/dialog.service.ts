import { Injectable } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { FabricDialogConfig } from './dialog-config.interface';

@Injectable()
export class FabricDialogService {

  private _defaultOverlayConfig: OverlayConfig;
  private _overlayRef: OverlayRef;

  constructor(private _overlay: Overlay) {
    this._defaultOverlayConfig = {
      positionStrategy: _overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: _overlay.scrollStrategies.block(),
      hasBackdrop: true,
      backdropClass: 'fab-dialog-overlay-backdrop',
    };
  }

  open<T>(component: ComponentType<T>, config?: FabricDialogConfig) {
    if (!this._overlayRef) {
      this._overlayRef = this._createOverlay(this._createConfig(config));
      this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
    }
    const portal = new ComponentPortal(component);
    this._overlayRef.attach(portal);
  }

  private _createOverlay(config: OverlayConfig) {
    return this._overlay.create(config);
  }

  private _createConfig(config: FabricDialogConfig | undefined): OverlayConfig {
    if (config) {
      return new OverlayConfig({
        ...this._defaultOverlayConfig,
        hasBackdrop: config.canDismiss,
        backdropClass: config.backdropClass,
      });
    } else {
      return new OverlayConfig(this._defaultOverlayConfig);
    }
  }

}
