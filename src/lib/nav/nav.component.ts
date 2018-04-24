import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs/Subscription';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'fab-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('navOverlay', [
      transition(':enter', [
        style({ transform: 'translate3d(-100px, 0, 0)' }),
        animate('0.367s cubic-bezier(0.1, 0.9, 0.2, 1)'),
      ]),
    ]),
  ],
})
export class FabricNavComponent implements OnDestroy {

  private _overlayRef: OverlayRef;
  private subscription: Subscription;

  @Input() appName: string;
  @Input() fixed = true;
  @ViewChild(CdkPortal) fabNavOverlayCdkPortal: CdkPortal;

  constructor(private overlay: Overlay) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get overlayRef(): OverlayRef {
    this._overlayRef = this.overlay.create({
      width: 275,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true,
    });
    this.subscription = this._overlayRef.backdropClick()
      .subscribe(() => this._overlayRef.dispose());
    return this._overlayRef;
  }

  openNavOverlay() {
    this.overlayRef.attach(this.fabNavOverlayCdkPortal);
  }

}
