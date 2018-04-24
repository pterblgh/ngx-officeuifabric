import { Component, OnInit, Input } from '@angular/core';
import { PersonaSize } from './persona-size.enum';
import { PersonaInitialsColor } from './persona-initials-colors.enum';
import { PersonaPresence } from './persona-presence.enum';
import { FabricPersonaService } from './persona.service';

@Component({
  selector: 'fab-persona',
  styleUrls: ['./persona.component.scss'],
  templateUrl: './persona.component.html',
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

  constructor(private readonly personaService: FabricPersonaService) {
  }

  ngOnInit(): void {
    this.realSize = Number(this.size.split('size')[1]);

    if (!this.imageUrl && this.primaryText) {
      const initials = this.personaService.calculateInitials(this.primaryText);
      this.imageInitials = this.imageInitials || initials.imageInitials;
      this.initialsColor = this.initialsColor || initials.initialsColor;
    }
  }
}
