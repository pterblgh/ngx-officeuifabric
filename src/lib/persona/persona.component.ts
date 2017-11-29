import { Component, OnInit, Input } from '@angular/core';
import { PersonaSize } from './persona-size.enum';
import { PersonaInitialsColor } from './persona-initials-colors.enum';
import { PersonaPresence } from './persona-presence.enum';

@Component({
  selector: 'fab-persona',
  styleUrls: ['./persona.component.css'],
  templateUrl: './persona.component.html'
})
export class FabricPersonaComponent implements OnInit {

  @Input() primaryText?: string;
  @Input() size?: PersonaSize;
  @Input() imageShouldFadeIn?: boolean;
  @Input() imageShouldStartVisible?: boolean;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() imageInitials?: string;
  @Input() initialsColor?: PersonaInitialsColor;
  @Input() presence?: PersonaPresence;
  @Input() secondaryText?: string;
  @Input() tertiaryText?: string;
  @Input() optionalText?: string;
  @Input() hidePersonaDetails?: boolean;
  @Input() className?: string;
  @Input() showSecondaryText?: boolean;
  @Input() coinSize?: number;

  ngOnInit(): void {
    console.log(`FabricPersonaComponent created`);
  }
}
