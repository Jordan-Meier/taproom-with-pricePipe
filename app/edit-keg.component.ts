import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg',
  inputs: ['kegToEdit'],
  template: `
  <div class="keg-form">
    <h3>Edit Keg Details:</h3>
    <input [(ngModel)]="kegToEdit.brewery" class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]="kegToEdit.brewName" class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]="kegToEdit.pintPrice" class="col-sm-8 input-lg keg-form"/>
    <input [(ngModel)]="kegToEdit.pintsRemaining" class="col-sm-8 input-lg keg-form"/>
  </div>
  `
})

export class EditKegComponent {
  public kegToEdit: Keg;
}
