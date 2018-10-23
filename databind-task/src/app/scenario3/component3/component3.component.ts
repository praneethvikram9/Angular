import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component3',
  template: `
  <input #box (keyup.enter)="onEnter(box.value)">
  <app-component4 
  [value]="value">
  </app-component4>
  
  `,
  styleUrls: ['./component3.component.css']
})
export class Component3Component {

  value = "";
  onEnter(value:string){this.value=value;}

}
