import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent1',
  template:`
  <app-child2

  [v1]="input">

  </app-child2>
  `,
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  @Input('val') input:string;

}
