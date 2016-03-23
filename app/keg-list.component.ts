import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs:['kegList'],


  template: `
    <h2 *ngFor="#keg of kegList" (click)="kegWasSelected(keg)">
      if this.selected then <keg-display></keg-display>
      otherwise
      {{ keg.brewery }}
    </h2>

  `
})

export class KegListComponent {
  public kegList: Array<Keg>; // Array<Keg> is same as Keg[] type
  public selected: Keg;

  constructor() {}
  kegWasSelected(clickedKeg: Keg): void {
    this.selected = clickedKeg;
    console.log(clickedKeg);
  }
}
