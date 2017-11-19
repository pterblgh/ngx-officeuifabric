import { Component, OnInit } from '@angular/core';
import { DropdownItem, DropdownItemType } from 'ngx-fabric';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputField: string;
  rating = 2;
  selectInputs: DropdownItem[];

  ngOnInit(): void {
    this.selectInputs = [
      { key: 'Header', text: 'Actions', itemType: DropdownItemType.Header },
      { key: 'A', text: 'Option a' },
      { key: 'B', text: 'Option b' },
      { key: 'C', text: 'Option c' },
      { key: 'D', text: 'Option d' },
      { key: 'E', text: 'Option e' },
      { key: 'divider_2', text: '-', itemType: DropdownItemType.Divider },
      { key: 'Header2', text: 'People', itemType: DropdownItemType.Header },
      { key: 'F', text: 'Option f' },
      { key: 'G', text: 'Option g' },
      { key: 'H', text: 'Option h' },
      { key: 'I', text: 'Option i' },
      { key: 'J', text: 'Option j' },
    ];
  }

}
