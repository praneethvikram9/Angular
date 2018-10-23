import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template:`
  <h3>Department List </h3>

  <ul class="items">
  <li (click)=onSelect(department) [class.selected]="isSelected(department)" *ngFor="let department of departments">{{department.id}} . {{department.name}}</li>
  </ul>
  
  
  
  
  
  `,
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    {"id":1,"name":"angular"},
    {"id":2,"name":"node"},
    {"id":3,"name":"mongodb"},
    {"id":4,"name":"ruby"},
    {"id":5,"name":"bootstrap"},
  ]
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.selectedId=id;
    });
  }
  onSelect(department){
    //this.router.navigate(['/department',department.id]);
    //using relative navigation
    this.router.navigate([department.id],{relativeTo:this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
