import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
      <h3>Tap a Keg:</h3>
      <input placeholder="Brew Name" class="form-control" #newBrewName>
      <input type="number" placeholder="Pint Price" class="form-control" #newPintPrice>
      <input placeholder="Brewery" class="form-control" #newBrewery>
      <input type="number" placeholder="Alcohol Percent" class="form-control" #newAlcPercent><br>
      <button (click)="addKeg(newBrewName, newPintPrice, newBrewery, newAlcPercent)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})


export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<any[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userBrewName: HTMLInputElement, userPintPrice: HTMLInputElement, userBrewery: HTMLInputElement, userAlcPercent: HTMLInputElement) {
    console.log(userBrewName);
    var kegArray: any[] = [userBrewery.value, userPintPrice.value, userBrewName.value, userAlcPercent.value];
  this.onSubmitNewKeg.emit(kegArray);
    userBrewName.value = "";
    userPintPrice.value = "";
    userBrewery.value = "";
    userAlcPercent.value = "";
  }
}
