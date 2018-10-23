import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
    {path:'department',component:DepartmentListComponent},
    {path:'employee',component:EmployeeListComponent},
    {path:'department/:id',component:DepartmentDetailComponent},
    {path: "**",redirectTo: '/department',pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents = [DepartmentListComponent,EmployeeListComponent,DepartmentDetailComponent]
