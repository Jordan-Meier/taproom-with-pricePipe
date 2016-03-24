import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], args) {
    var price = args[0]

    if (price === "<5") {
      return input.filter((keg) => {
        return keg.pintPrice < 5;
      });
    } else if (price === ">5") {
      return input.filter((keg) => {
        return keg.pintPrice >= 5;
    });
    } else {
      return input;
    }
  }
}
