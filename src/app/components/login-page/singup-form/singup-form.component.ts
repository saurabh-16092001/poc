import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.scss']
})
export class SingupFormComponent implements OnInit{
  signupForm!:FormGroup ;

  ngOnInit(): void{
    this.signupForm= new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.email,Validators.required]),
      password: new FormControl(null,[Validators.email,Validators.required]),
    });
  }
}
