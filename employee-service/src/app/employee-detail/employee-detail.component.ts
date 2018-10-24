import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Details </h2>
  <h2>{{errorMsg}}</h2>
  <ul *ngFor="let employee of employees">
  <li>{{employee.name}} - {{employee.age}}</li>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees=[];
  public errorMsg

  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getEmployees().subscribe(data => this.employees=data,
                                                  error => this.errorMsg = error);
  }

}
