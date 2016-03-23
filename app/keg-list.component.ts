import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs:['kegList'],


  template: `
    <div *ngFor="#currentKeg of kegList">
      <h3 (click)="kegWasSelected(currentKeg)">
        {{ selected.brewery }}
      </h3>
      <keg *ngIf"currentKeg === selected" [keg] = "selected"></keg>
    </div>

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
