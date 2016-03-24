import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Tap a Keg:</h3>
      <input placeholder="Brew Name" class="form-control" #newBrewName>
      <input placeholder="Brewery" class="form-control" #newBrewery>
      <input placeholder="Alcohol Percent" class="form-control" #newAlcPercent>
      <button (click)="addKeg(newBrewName, newBrewery, newAlcPercent)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})


export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userBrewName: HTMLInputElement, userBrewery: HTMLInputElement, userAlcPercent: HTMLInputElement) {
    console.log(userBrewName);
    var kegArray: string[] = [userBrewery.value, userBrewName.value, userAlcPercent.value];
  this.onSubmitNewKeg.emit(kegArray);
    userBrewName.value = "";
    userBrewery.value = "";
    userAlcPercent.value = "";
  }
}
