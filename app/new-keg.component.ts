import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Tap a Keg:</h3>
      <input placeholder="Brew Name" class="form-control #newBrewName">
      <input placeholder="Brewery" class="form-control #newBrewery">
      <input placeholder="Alcohol Percent" class="form-control #newAlcPercent">
      <button (click)="addKeg(newBrewName, newBrewery, newAlcPercent)">Add</button>
    </div>

  `
})


export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userBrewName: HTMLInputElement, userBrewery: HTMLInputElement, userAlcPercent: HTMLInputElement) {
    console.log(userBrewName);
    var newKeg = new Keg(userBrewery.value, userBrewName.value, 0, userAlcPercent.value);
  this.onSubmitNewKeg.emit(newKeg);
    userBrewName.value = "";
    userBrewery.value = "";
    userAlcPercent.value = "";
  }
}
