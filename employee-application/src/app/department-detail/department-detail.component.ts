import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
   <h3>
   you have selected department with id = {{departmentId}}
   </h3>
   <p>
   <button (click)="showOverview()">Overview</button>
   <button (click)="showContact()">Contact</button>
   </p>
   <router-outlet></router-outlet>
   <button (click)="goPrevious()">previous</button>
   
   <button (click)="goNext()">next</button>
   <div>
   <button (click)="gotoDepartment()">back</button>
   </div>

  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.departmentId=id;
    });
  }

  goPrevious(){
    let previousId=this.departmentId-1;
    this.router.navigate(['/department',previousId]);
  }

  goNext(){
    let nextId=this.departmentId+1;
    this.router.navigate(['/department',nextId]);
  }

  gotoDepartment(){
    let selectedId = this.departmentId ? this.departmentId :null;
    this.router.navigate( ['../',{id: selectedId}],{relativeTo: this.route});

  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route});

  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route});

  }
}
