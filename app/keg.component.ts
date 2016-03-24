import { Component} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-details',
    inputs: ['keg'],
  template: `
    <div class="keg-info">
      <p>Brewery: {{ keg.brewery }}</p>
      <p>Pint Price: $ {{ keg.pintPrice }}.00</p>
      <p>Pints Remaining: {{ keg.pintsRemaining }}</p>
      <p>Alcohol Percentage: {{ keg.alcPercent }}%</p>
    </div>  
  `
})
export class KegComponent {
  public keg: Keg;
}
