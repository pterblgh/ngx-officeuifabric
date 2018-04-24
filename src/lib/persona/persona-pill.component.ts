import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { PersonaPillSize } from './persona-pill-size.enum';
import { PersonaInitialsColor } from './persona-initials-colors.enum';
import { PersonaPresence } from './persona-presence.enum';
import { FabricPersonaService } from './persona.service';

@Component({
  selector: 'fab-persona-pill',
  templateUrl: './persona-pill.component.html',
  styleUrls: ['./persona-pill.component.scss'],
})
export class FabricPersonaPillComponent implements OnInit {

  @Input() primaryText?: string;
  @Input() imageInitials?: string;
  @Input() initialsColor?: PersonaInitialsColor;
  @Input() presence?: PersonaPresence;
  @Input() showPresence = true;
  @Input() hidePersonaDetails = false;

  @HostBinding('class')
  @Input()
  size = PersonaPillSize.Size24;

  PersonaPresence = PersonaPresence;

  constructor(private readonly personaService: FabricPersonaService) { }

  ngOnInit(): void {
    if (this.primaryText) {
      const calculatedInitials = this.personaService.calculateInitials(this.primaryText);
      this.imageInitials = this.imageInitials || calculatedInitials.imageInitials;
      this.initialsColor = this.initialsColor || calculatedInitials.initialsColor;
    }
  }

}
