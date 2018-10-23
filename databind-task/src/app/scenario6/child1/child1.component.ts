import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template:`

  <input #box (keyup.enter)="onEnter(box.value)">
  <app-parent1
  [val]="value">
  </app-parent1>
  
  
  `,
  styleUrls: ['./child1.component.css']
})
export class Child1Component{

  value="";
  onEnter(value:string){this.value=value};

 

}
