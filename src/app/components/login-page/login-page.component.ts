import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationServiceService} from "../services/authentication-service.service"
import { AuthenticationRequest } from '../model/AuthenticationRequest';
import { ServiceResponse } from '../model/serviceResponse';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginObj:any={
    'email':"",
    'password':""
  }
  constructor(private http:HttpClient,private router:Router,private authenticationService:AuthenticationServiceService){
  }

  authenticationRequest:AuthenticationRequest ={};
  onLogin(){
    this.http.post("/url",this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("login Success");
        localStorage.setItem('loginToken',res.data.token);
        this.router.navigateByUrl('/dashboard');
      }
      else{
        alert(res.message);
      }
    })
  }
  onSubmit(){
    this.authenticationService.login(this.authenticationRequest).subscribe({
      next:(response:ServiceResponse)=>{
        if(response.Data.token){
          localStorage.setItem('loginToken',response.Data.token);
          localStorage.setItem('refresh',response.Data.token);
          this.router.navigate(['dashboard']);
        }else{
          alert("Login Failed");
        }
      }
    })
  }
}
