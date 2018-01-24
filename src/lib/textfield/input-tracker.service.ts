import { Injectable } from '@angular/core';

@Injectable()
export class InputTrackerService {

  private index: number;

  constructor() {
    this.index = -1;
  }

  getIndex(): number {
    this.index++;
    return this.index;
  }

  removeIndex() {
    this.index--;
  }

}
