import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>Employee application</h1>
  <nav>
  <a routerLink="/department" routerLinkActive="active">departments</a>
  <a routerLink="/employee" routerLinkActive="active">employeeList</a>
  </nav>
  <router-outlet></router-outlet>
  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-application';
}
