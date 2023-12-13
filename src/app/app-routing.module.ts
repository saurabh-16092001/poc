import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SingupFormComponent } from './components/login-page/singup-form/singup-form.component';

const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"signup",component:SingupFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
