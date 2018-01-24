import { Injectable } from '@angular/core';

@Injectable()
export class FormElementService {

  private _uniqueId: number = -1;

  get uniqueId() {
    this._uniqueId += 1;
    return this._uniqueId;
  }

}
