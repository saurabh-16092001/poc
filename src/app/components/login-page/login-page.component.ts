import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private http:HttpClient,private router:Router){
    
  }
  onLogin(){
    this.http.post("/url",this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("login Success");
        localStorage.setItem('loginToken',res.data.token);
        this.router.navigateByUrl('/dashboard');
      }
      else{
        alert("Login Failed");
      }
    })
  }
}
