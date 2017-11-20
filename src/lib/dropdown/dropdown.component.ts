import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from './dropdown-item.interface';
import { DropdownItemType } from './dropdown-item-type.enum';

@Component({
    selector: 'fab-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    host: {
        '[class.disabled]': 'disabled'
    }
})
export class FabricDropdownComponent implements OnInit {

    @Input() placeholder: string;
    @Input() label: string;
    @Input() items: DropdownItem[];
    @Input() disabled: boolean;
    @Input() defaultSelectedKey: string;

    @Output() itemSelected: EventEmitter<DropdownItem>;

    DropdownItemType = DropdownItemType;
    isItemContainerVisible = false;
    _placeholder: string;
    _currentSelectedItem: DropdownItem;

    set currentSelectedItem(item: DropdownItem | null) {
        if (item) {
            this._currentSelectedItem = item;
            this._placeholder = item.text;
            this.isItemContainerVisible = false;
            this.itemSelected.emit(item);
        }
    }

    get currentSelectedItem() {
        return this._currentSelectedItem;
    }

    constructor() {
        this.itemSelected = new EventEmitter();
    }

    ngOnInit(): void {
        this._placeholder = this.placeholder;
        if (this.defaultSelectedKey) {
            const item = this.items.find(item => item.key === this.defaultSelectedKey);
            this.currentSelectedItem = item || null;
        }
    }

    onPlaceholderClicked(_event: MouseEvent) {
        this.isItemContainerVisible = !this.isItemContainerVisible;
    }

    selectItem(item: DropdownItem) {
        if (!item.itemType) {
            this.currentSelectedItem = item;
        }
    }

}
