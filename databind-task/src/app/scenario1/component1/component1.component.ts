import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <input #box (keyup.enter)="onEnter(box.value)">
  
  
  `,
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
value = "";
onEnter(value: string){this.value=value;
console.log(value);}

}
