import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HeaderComponent} from './ui/header/header.component';
import {LayoutComponent} from './ui/layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
{path:'layout',component:LayoutComponent},
{path:'register',component:RegisterComponent},
{path:'dashboard',component:DashboardComponent}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
