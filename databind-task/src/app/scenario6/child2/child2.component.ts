import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  template:`

  <p>{{out}}</p>
  <p>getting from child 1 and printing in child2</p>`,
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Input('v1') out:string;



}
