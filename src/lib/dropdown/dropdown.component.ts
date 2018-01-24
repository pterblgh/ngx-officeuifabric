import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DropdownItem } from './dropdown-item.interface';
import { DropdownItemType } from './dropdown-item-type.enum';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

@Component({
  selector: 'fab-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  host: {
    '[class.disabled]': 'disabled',
  },
  animations: [
    trigger('actionEditor', [
      state('true', style({ transform: 'translate3d(0px, 0px, 0px)' })),
      transition(':enter', [
        style({ transform: 'translate3d(0px, -10px, 0px)' }),
        animate('0.367s cubic-bezier(0.1, 0.9, 0.2, 1)'),
      ]),
    ]),
  ],
})
export class FabricDropdownComponent implements OnInit {

  private _placeholder: string;
  private _currentSelectedItem: DropdownItem;
  private _isItemContainerVisible = false;
  private _width: number;

  @ViewChild(CdkOverlayOrigin) private _cdkOverlayOrigin: CdkOverlayOrigin;
  @ViewChild(CdkConnectedOverlay) private _cdkConnectedOverlay: CdkConnectedOverlay;

  @Input() label: string;
  @Input() items: DropdownItem[];
  @Input() disabled: boolean;
  @Input() defaultSelectedKey: string;

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
  }

  @Output() itemSelected: EventEmitter<DropdownItem>;

  get isItemContainerVisible() { return this._isItemContainerVisible; }
  set isItemContainerVisible(value: boolean) {
    this._isItemContainerVisible = value;
  }

  get currentSelectedItem() { return this._currentSelectedItem; }
  set currentSelectedItem(item: DropdownItem | null) {
    if (item) {
      this._currentSelectedItem = item;
      this.placeholder = item.text;
      this.isItemContainerVisible = false;
      this.itemSelected.emit(item);
    }
  }

  get elementWidth() {
    if (!this._width) {
      this._width = this._cdkOverlayOrigin.elementRef.nativeElement.offsetWidth;
    }
    return this._width;
  }

  DropdownItemType = DropdownItemType;

  constructor() {
    this.itemSelected = new EventEmitter();
  }

  ngOnInit(): void {
    if (this.defaultSelectedKey) {
      this.currentSelectedItem = this.items.find(item => item.key === this.defaultSelectedKey) || null;
    }
  }

  onPlaceholderClicked(_event: MouseEvent) {
    this.isItemContainerVisible = !this.isItemContainerVisible;
  }

  onBackdropClicked() {
    this._cdkConnectedOverlay.overlayRef.detach();
    this.isItemContainerVisible = false;
  }

  selectItem(item: DropdownItem) {
    if (!item.itemType) {
      this.currentSelectedItem = item;
    }
  }

}
