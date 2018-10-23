import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component5',
  template:`
  
  <p>{{value}}</p>
  <p> printing from parent</p>`,
  styleUrls: ['./component5.component.css']
})
export class Component5Component {

  @Input('value') value:string;

 

}
