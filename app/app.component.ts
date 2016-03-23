import { Component } from 'angular2/core';
import { Keg } from './keg.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="jumbotron text-center">
    <h1>Welcome to the Tap Room</h1>
  </div>
  <div class='container'>
    <h2>{{kegs[0].brewery}}</h2>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Deschuttes", "Angular Stout", 0, "7%"),
    ];
    console.log(this.kegs[0]);
  }
}
