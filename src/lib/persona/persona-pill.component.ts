import { Component, OnInit, Input } from '@angular/core';
import { PersonaPillSize } from './persona-pill-size.enum';
import { PersonaInitialsColor } from './persona-initials-colors.enum';
import { PersonaPresence } from './persona-presence.enum';

@Component({
  selector: 'fab-persona-pill',
  templateUrl: './persona-pill.component.html',
  styleUrls: ['./persona-pill.component.css'],
  host: {
    '[class]': 'size'
  }
})
export class FabricPersonaPillComponent implements OnInit {

  @Input() primaryText?: string;
  @Input() size = PersonaPillSize.Size24;
  @Input() imageInitials?: string;
  @Input() initialsColor?: PersonaInitialsColor;
  @Input() presence?: PersonaPresence;
  @Input() showPresence = true;
  @Input() hidePersonaDetails = false;

  ngOnInit(): void {
    console.log(`FabricPersonaPillComponent initialized`);
  }

}
