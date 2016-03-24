import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import {LevelPipe} from './keg-level.pipe';
import {PricePipe} from './pint-price.pipe';

@Component({
  selector: 'keg-list',
  inputs:['kegList'],
  directives:[KegComponent, EditKegComponent, NewKegComponent],
  pipes: [LevelPipe, PricePipe],
  template: `
    <select (change)="onChange($event.target.value)" class="select">
      <option value="all">Show All</option>
      <option value="low">Show low kegs</option>
      <option value="empty">Show empty kegs</option>
    </select>

    <select (change)="onChangePrice($event.target.value)" class="select">
      <option value="all">Show All</option>
      <option value="<5">Show Happy Hour Beers</option>
      <option value=">5">Show "Premium" Beers</option>
    </select>

    <div id="keg-list" *ngFor="#currentKeg of kegList | level:filterLevel | price:filterPrice"
    [class.red]= "currentKeg.alcPercent > 6"
    [class.green]= "currentKeg.alcPercent <= 6"
    [class.boxed]= "currentKeg.pintPrice < 5">
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
  public filterLevel: string = "all";
  public filterPrice: string = "all";

  constructor() {}

  onChange(filterOption) {
    this.filterLevel = filterOption;
    console.log(this.filterLevel);
  }

  onChangePrice(filterOption) {
    this.filterPrice = filterOption;
  }

  kegWasSelected(clickedKeg: Keg): void {
    if(this.selectedKeg === clickedKeg) {
      this.selectedKeg = undefined;
    } else {
      this.selectedKeg = clickedKeg;
    }
    console.log(this.selectedKeg);
  }

  createKeg(kegArray:any[]): void {
    var newKeg: Keg = new Keg(kegArray[0], kegArray[1], kegArray[2], this.kegList.length, kegArray[3]);
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
