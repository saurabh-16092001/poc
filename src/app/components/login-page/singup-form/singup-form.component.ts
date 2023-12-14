import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { Router } from '@angular/router';
import { ServiceResponse } from '../../model/serviceResponse';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.scss']
})
export class SingupFormComponent implements OnInit{
  signupForm!:FormGroup ;
  password:string="";
  // registrationRequest : RegistrationRequest={};
  constructor(private authenticationService:AuthenticationServiceService,private router:Router){}

  ngOnInit(): void{
    this.signupForm= new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.email,Validators.required]),
    });
  }
  // onSubmit(){
  //   if(this.password !== this.registrationRequest.password){
  //     alert("Passoword does not match");
  //   }else{  
  //     this.authenticationService.register(this.registrationRequest).subscribe({
  //       next:(res:ServiceResponse)=>{
  //         if(res){
  //           this.router.navigate(['login']);
  //         }
  //       }
  //     })
  //   }
  // }
}
