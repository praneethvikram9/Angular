import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {ActivatedRoute,Router} from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;
  password:string;
  flag:boolean;
  user_temp:User;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService,private router :Router) { }

  ngOnInit() {
  }
  login(username:string,password:string){
     this.user_temp = new User();
    this.user_temp.username=username;
    this.user_temp.password=password;
    this.userService.search(this.user_temp.username).subscribe(data => {
      this.flag = data;
      if(this.flag==true){
        this.router.navigate(['/dashboard']);
      }
      else{
        this.router.navigate(['/loginerror']);
      }
      
    })
  }

}
