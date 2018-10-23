import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component4',
  template:`
  
  <p>{{value}}</p>
  <p> printing from child</p>`,
  styleUrls: ['./component4.component.css']
})
export class Component4Component {
  @Input('value') value:string;

}
