import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import {LevelPipe} from './keg-level.pipe';

@Component({
  selector: 'keg-list',
  inputs:['kegList'],
  directives:[KegComponent, EditKegComponent, NewKegComponent],
  pipes: [LevelPipe],
  template: `
    <select (change)="onChange($event.target.value)" class="select">
      <option value="all">Show All</option>
      <option value="low">Show low kegs</option>
      <option value="empty">Show empty kegs</option>
    </select>

    <div id="keg-list" *ngFor="#currentKeg of kegList | level:filterLevel" >
      <h3 (click)="kegWasSelected(currentKeg)">
        {{ currentKeg.brewName }}
      </h3>
      <button (click)="kegWasPoured(currentKeg)">Pour</button>
      <keg-details *ngIf="currentKeg === selectedKeg" [keg]="currentKeg"></keg-details>
    </div>
    <edit-keg *ngIf='selectedKeg' [kegToEdit]='selectedKeg'></edit-keg>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>

  `
})

export class KegListComponent {
  public kegList: Array<Keg>; // Array<Keg> is same as Keg[] type
  public selectedKeg: Keg;
  public filterLevel: string; "all";

  constructor() {}

  onChange(filterOption) {
    this.filterLevel = filterOption;
    console.log(this.filterLevel);
  }

  kegWasSelected(clickedKeg: Keg): void {
    if(this.selectedKeg === clickedKeg) {
      this.selectedKeg = undefined;
    } else {
      this.selectedKeg = clickedKeg;
    }
    console.log(this.selectedKeg);
  }

  createKeg(kegArray:string[]): void {
    var newKeg: Keg = new Keg(kegArray[0], kegArray[1], this.kegList.length, kegArray[2]);
    this.kegList.push(newKeg);
  }

  kegWasPoured(clickedKeg: Keg): void {
    if(clickedKeg.pintsRemaining <= 0) {
      alert("Out of BEER!!!");
    } else {
      clickedKeg.pintsRemaining--;
    }
    console.log(this.selectedKeg);
  }
}
