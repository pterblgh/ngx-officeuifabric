import { Directive, OnInit, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig, OriginConnectionPosition, OverlayConnectionPosition } from '@angular/cdk/overlay';
import { Portal, ComponentPortal } from '@angular/cdk/portal';
import { FabricCalloutComponent } from './callout.component';

@Directive({
    selector: '[fab-callout], [fabCallout]'
})
export class FabricCalloutDirective implements OnDestroy {

    private _overlayRef: OverlayRef;

    constructor(
        private _element: ElementRef,
        private _overlay: Overlay
    ) { }

    ngOnDestroy(): void {
        this._overlayRef.dispose();
    }

    @HostListener('click')
    private _openOverlay() {
        const originPos: OriginConnectionPosition = { originX: 'end', originY: 'top' };
        const overlayPos: OverlayConnectionPosition = { overlayX: 'start', overlayY: 'top' };
        const config = new OverlayConfig({
            positionStrategy: this._overlay.position().connectedTo(this._element, originPos, { overlayX: 'start', overlayY: 'top' }),
            backdropClass: 'fab-callout-overlay-backdrop',
            hasBackdrop: true,
            maxWidth: 300
        });
        if (!this._overlayRef) {
            this._overlayRef = this._overlay.create(config);
        }
        const portal: Portal<any> = new ComponentPortal(FabricCalloutComponent);
        this._overlayRef.attach(portal);
        this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
    }

}
