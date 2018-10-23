import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  template:`
  <input #box (keyup.enter)="onEnter(box.value)">
  <app-child [value]="value">
  </app-child>`,
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent  {

  value = "";
  onEnter(value:string){this.value=value};

}
