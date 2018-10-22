import { Component } from '@angular/core';

@Component({
    selector:'courses',
    template:`
    <h2>Courses</h2>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    `
})

export class CoursesComponent{
    title = "List of courses";
    courses;

}