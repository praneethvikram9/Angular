import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const appRoutes:Routes = [
  {path:'movie-list',component:MovieListComponent},
  {path:'search/:input',component:SearchComponent},
  {path:'**',redirectTo:'/movie-list',pathMatch:'full'},
  {path:'',redirectTo:'/movie-list',pathMatch:'full'}
]

  @NgModule({
    
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
  })
  export class appRouteModule{}
  export const componentsList=[SearchComponent];