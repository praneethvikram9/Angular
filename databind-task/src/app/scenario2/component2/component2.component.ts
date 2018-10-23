import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
  
  
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  value = "";
onEnter(value: string){this.value=value;}

  

}
