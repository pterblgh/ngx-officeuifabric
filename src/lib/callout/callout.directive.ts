import { Directive, OnInit, HostListener, ElementRef, OnDestroy, Injector, Input } from '@angular/core';
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  OriginConnectionPosition,
  OverlayConnectionPosition,
} from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { FabricCalloutComponent } from './callout.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { FAB_CALLOUT_CONFIG } from './callout.tokens';
import { CalloutConfig } from './callout-config.interface';

@Directive({
  selector: '[fab-callout], [fabCallout]',
})
export class FabricCalloutDirective implements OnInit, OnDestroy {

  private static _defaultConfig: CalloutConfig = {
    title: '',
    content: '',
    canDismiss: true,
  };

  private _overlayRef: OverlayRef;
  private _backdropClicked$: Observable<MouseEvent>;
  private _subscription: Subscription;
  private _config: CalloutConfig;

  @Input()
  get calloutConfig(): CalloutConfig {
    return this._config;
  }

  set calloutConfig(value: CalloutConfig) {
    this._config = value;
  }

  constructor(
    private _injector: Injector,
    private _element: ElementRef,
    private _overlay: Overlay,
  ) { }

  ngOnInit(): void {
    this.calloutConfig = { ...FabricCalloutDirective._defaultConfig, ...this.calloutConfig };
  }

  ngOnDestroy(): void {
    this._overlayRef.dispose();

    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  @HostListener('click')
  private _openOverlay() {
    if (this._config) {
      const config = this._createConfig(this._config);
      this._overlayRef = this._overlay.create(config);
      if (this._config.canDismiss) {
        this._backdropClicked$ = this._overlayRef.backdropClick();
        this._subscription = this._backdropClicked$.subscribe(() => this._overlayRef.dispose());
      }
      const injector = this._createInjector(this._config);
      const portal = new ComponentPortal(FabricCalloutComponent, null, injector);
      this._overlayRef.attach(portal);
    }
  }

  private _createInjector(config: CalloutConfig): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(OverlayRef, this._overlayRef);
    injectionTokens.set(FAB_CALLOUT_CONFIG, config);

    return new PortalInjector(this._injector, injectionTokens);
  }

  private _createConfig(config: CalloutConfig): OverlayConfig {
    const originPos: OriginConnectionPosition = { originX: 'end', originY: 'top' };
    const overlayPos: OverlayConnectionPosition = { overlayX: 'start', overlayY: 'top' };

    const overlayConfig: OverlayConfig = {
      positionStrategy: this._overlay.position().connectedTo(this._element, originPos, overlayPos),
      backdropClass: 'fab-callout-overlay-backdrop',
      hasBackdrop: true,
      maxWidth: 300,
    };

    if (!config.canDismiss) {
      delete overlayConfig.backdropClass;
      delete overlayConfig.hasBackdrop;
    }

    return new OverlayConfig(overlayConfig);
  }
}
