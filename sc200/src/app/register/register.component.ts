import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required,Validators.minLength(6)],
      contactNumber:['',Validators.required,Validators.minLength(10)]
    })
  }
  onSubmit(){
    this.userService.register(this.registerForm.value).subscribe(
      data =>{
      this.router.navigate(['/login']);
    },

    error => {
      console.log("error in details");
    });
  }

}
