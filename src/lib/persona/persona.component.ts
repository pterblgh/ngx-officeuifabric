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

  private _size: number;

  @Input() primaryText?: string;
  @Input() size = PersonaSize.Size40;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() imageInitials?: string;
  @Input() initialsColor?: PersonaInitialsColor;
  @Input() presence?: PersonaPresence;
  @Input() showPresence = true;
  @Input() secondaryText?: string;
  @Input() tertiaryText?: string;
  @Input() optionalText?: string;
  @Input() hidePersonaDetails = false;
  @Input() showSecondaryText = true;

  get PersonaPresence() {
    return PersonaPresence;
  }

  get realSize(): number {
    return this._size;
  }
  set realSize(value: number) {
    this._size = value;
  }

  ngOnInit(): void {
    this.realSize = Number(this.size.split('size')[1]);
    if (!this.imageUrl) {
      const initials = this.calculateInitials();
      this.imageInitials = this.imageInitials || initials.imageInitials;
      this.initialsColor = this.initialsColor || initials.initialsColor;
    }
  }

  private calculateInitials(): CalculatedInitials {
    let imageInitials = '';
    let initialsColor = PersonaInitialsColor.Blue;
    const personaColors = [
      PersonaInitialsColor.LightBlue,
      PersonaInitialsColor.Blue,
      PersonaInitialsColor.DarkBlue,
      PersonaInitialsColor.Teal,
      PersonaInitialsColor.LightGreen,
      PersonaInitialsColor.Green,
      PersonaInitialsColor.DarkGreen,
      PersonaInitialsColor.Magenta,
      PersonaInitialsColor.Purple,
      PersonaInitialsColor.Black,
      PersonaInitialsColor.Orange,
      PersonaInitialsColor.Red,
      PersonaInitialsColor.DarkRed
    ];
    if (this.primaryText) {
      const splittedPrimaryText = this.primaryText.split(' ');
      let value = 0;
      const primaryTextLength = this.primaryText.length;

      if (splittedPrimaryText.length > 1) {
        imageInitials += splittedPrimaryText[0][0];
        imageInitials += splittedPrimaryText[1][0];
      }
      for (let i = 0; i < primaryTextLength; i++) {
        value += this.primaryText.charCodeAt(i);
      }
      initialsColor = personaColors[Math.floor(value % personaColors.length)];
    }
    return {
      imageInitials,
      initialsColor
    };
  }
}

interface CalculatedInitials {
  imageInitials: string;
  initialsColor: PersonaInitialsColor;
}
