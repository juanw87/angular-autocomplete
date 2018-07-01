import { Component } from '@angular/core';
import { ISelect } from './select/iselect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private data: Array<ISelect> = [{
    "id": 1,
    "descripcion": "Sierra 2500"
  }, {
    "id": 2,
    "descripcion": "300ZX"
  }, {
    "id": 3,
    "descripcion": "Focus"
  }, {
    "id": 4,
    "descripcion": "Scoupe"
  }, {
    "id": 5,
    "descripcion": "Corvette"
  }, {
    "id": 6,
    "descripcion": "Cooper"
  }, {
    "id": 7,
    "descripcion": "Elantra"
  }, {
    "id": 8,
    "descripcion": "Montana"
  }, {
    "id": 9,
    "descripcion": "Tribeca"
  }, {
    "id": 10,
    "descripcion": "Phaeton"
  }];
  private childData: ISelect;

  getData(_event){
    this.childData = _event;
  }
}
