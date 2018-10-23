import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
  <p>{{input}}</p>
  <p> getting data from grand child</p>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  @Input('val') input:string;

  

}
