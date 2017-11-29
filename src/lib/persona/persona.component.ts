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
  @Input() imageShouldFadeIn?: boolean;
  @Input() imageShouldStartVisible?: boolean;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() imageInitials?: string;
  @Input() initialsColor = PersonaInitialsColor.Blue;
  @Input() presence?: PersonaPresence;
  @Input() secondaryText?: string;
  @Input() tertiaryText?: string;
  @Input() optionalText?: string;
  @Input() hidePersonaDetails = false;
  @Input() className?: string;
  @Input() showSecondaryText = true;
  @Input() coinSize?: number;

  get realSize(): number {
    return this._size;
  }
  set realSize(value: number) {
    this._size = value;
  }

  ngOnInit(): void {
    this.realSize = Number((<string>this.size).split('size')[1]);
  }
}
