import { Component } from 'angular2/core';
import { Keg } from './keg.model'
import { KegListComponent } from './keg-list.component'

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="jumbotron text-center">
    <h1>Welcome to the Tap Room</h1>
  </div>
  <div class='container'>
    <h2>Currently on tap:</h2>
    <keg-list [kegList]="kegs"></keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Deschuttes", "Angular Stout", 0, 7),
      new Keg("Bridgeport", "IPA", 1, 8),
      new Keg("2Towns", "Bad Apple", 2, 6),
    ];
    console.log(this.kegs[0]);
  }
}
