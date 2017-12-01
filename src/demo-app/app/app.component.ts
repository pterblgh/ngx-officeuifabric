import { Component, OnInit } from '@angular/core';
import { DropdownItem, DropdownItemType, PersonaSize, PersonaPillSize, PersonaPresence } from 'ngx-fabric';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private presenceArray = [
    PersonaPresence.None,
    PersonaPresence.Offline,
    PersonaPresence.Online,
    PersonaPresence.Away,
    PersonaPresence.Dnd,
    PersonaPresence.Blocked,
    PersonaPresence.Busy,
  ];

  inputField: string;
  rating = 2;
  selectInputs: DropdownItem[];
  defaultSelectedKey = 'C';
  selectedItem: DropdownItem;

  PersonaSize = PersonaSize;
  PersonaPillSize = PersonaPillSize;

  hidePersonaDetails = false;
  persona = {
    name: 'Annie Lindqvist',
    position: 'Software Engineer',
    status: 'In a meeting',
    imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    presence: this.presenceArray[Math.floor(Math.random() * this.presenceArray.length)]
  };

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

  onItemChanged(selectedItem: DropdownItem) {
    this.selectedItem = selectedItem;
  }

}
