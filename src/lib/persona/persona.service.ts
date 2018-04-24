import { Injectable } from '@angular/core';
import { PersonaInitialsColor } from './persona-initials-colors.enum';
import { CalculatedInitials } from './calculated-initials.interface';

@Injectable()
export class FabricPersonaService {

  private static _personaColors = [
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
    PersonaInitialsColor.DarkRed,
  ];

  calculateInitials(primaryText: string): CalculatedInitials {
    const personaColors = FabricPersonaService._personaColors;
    let imageInitials = '';
    let initialsColor = PersonaInitialsColor.Blue;

    if (primaryText) {
      const splittedPrimaryText = primaryText.split(' ');
      let value = 0;
      const primaryTextLength = primaryText.length;

      if (splittedPrimaryText.length > 1) {
        imageInitials += splittedPrimaryText[0][0];
        imageInitials += splittedPrimaryText[1][0];
      }
      for (let i = 0; i < primaryTextLength; i++) {
        value += primaryText.charCodeAt(i);
      }
      initialsColor = personaColors[Math.floor(value % personaColors.length)];
    }

    return {
      imageInitials,
      initialsColor,
    };
  }

}
