import { Injectable } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes';
import { FabricDialogConfig } from './dialog-config.interface';
import { FabricDialogRef } from './dialog-ref.class';
import { filter } from 'rxjs/operators/filter';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class FabricDialogService {

  private _overlayRef: OverlayRef;
  private _dialogConfig: FabricDialogConfig;

  constructor(private _overlay: Overlay) {
    this._dialogConfig = {
      dismissOnBackdropClick: true,
      dismissOnEsc: true,
      hasBackdrop: true,
      backdropClass: 'fab-dialog-overlay-backdrop',
    };
  }

  open<T>(component: ComponentType<T>, _config?: FabricDialogConfig): FabricDialogRef {
    const config = this._mergeConfig(_config);
    const overlayConfig = this._createConfig(config);
    this._overlayRef = this._createOverlay(overlayConfig);
    const portal = new ComponentPortal(component);
    if (config.dismissOnBackdropClick) {
      const subscription = this._overlayRef.backdropClick()
        .subscribe(() => this._closeDialog(subscription));
    }
    if (config.dismissOnEsc) {
      const subscription = this._overlayRef.keydownEvents()
        .pipe(filter((e: KeyboardEvent) => e.keyCode === ESCAPE))
        .subscribe(() => this._closeDialog(subscription));
    }
    this._overlayRef.attach(portal);
    return new FabricDialogRef(this._overlayRef);
  }

  private _createOverlay(config: OverlayConfig) {
    return this._overlay.create(config);
  }

  private _createConfig(config: FabricDialogConfig): OverlayConfig {
    const { hasBackdrop, backdropClass } = config;
    return new OverlayConfig({
      positionStrategy: this._overlay.position().global().centerVertically().centerHorizontally(),
      scrollStrategy: this._overlay.scrollStrategies.block(),
      hasBackdrop,
      backdropClass,
    });
  }

  private _mergeConfig(config?: FabricDialogConfig): FabricDialogConfig {
    return config ? { ...this._dialogConfig, ...config } : this._dialogConfig;
  }

  private _closeDialog(subscription: Subscription) {
    this._overlayRef.detach();
    subscription.unsubscribe();
  }

}
