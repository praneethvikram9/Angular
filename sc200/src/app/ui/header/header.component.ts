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
     if(this.ValidateEmail(username)==true){
       this.user_temp.email=username;
     }
     else{
       this.user_temp.username=username;
     }
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

  signup(){
    
  }
  //checking whether given email is valid or not.
   ValidateEmail(mail) 
    {
       if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
          return (true)
        }
      return (false)
    }
}
