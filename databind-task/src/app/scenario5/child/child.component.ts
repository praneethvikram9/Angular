import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
  <app-parent [val]="val">
  </app-parent>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input('value') val:string;
  

}
