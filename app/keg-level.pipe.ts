import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "level",
  pure: false
})

export class LevelPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var kegLevel = args[0]

    if(kegLevel === "low") {
      return input.filter((keg) => {
        return keg.pintsRemaining <= 10;
      });
    } else if (kegLevel === "empty") {
      return input.filter((keg) => {
        return keg.pintsRemaining === 0;
      });
    } else {
      return input;
    }
  }
}
