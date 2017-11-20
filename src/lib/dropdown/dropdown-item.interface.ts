import { DropdownItemType } from './dropdown-item-type.enum';

export interface DropdownItem {
    key: string;
    text: string;
    itemType?: DropdownItemType;
}
