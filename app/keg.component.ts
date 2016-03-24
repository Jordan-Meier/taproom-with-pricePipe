import { Component} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-details',
    inputs: ['keg'],
  template: `
    <p>Brewery: {{ keg.brewery }}</p>
    <p>Pint Price: {{ keg.pintPrice }}</p>
    <p>Pints Remaining: {{ keg.pintsRemaining }}</p>
    <p>Alcohol Percentage: {{ keg.alcPercent }}%</p>
  `
})
export class KegComponent {
  public keg: Keg;
}
