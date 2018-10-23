import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component6',
  template:`
  <input #box (keyup.enter)="onEnter(box.value)">
  <app-component5 
  [value]="value">
  </app-component5>
  `,
  styleUrls: ['./component6.component.css']
})
export class Component6Component {

  value="";
  onEnter(value:string){this.value=value;}

}
