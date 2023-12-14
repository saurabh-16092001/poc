import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SingupFormComponent } from './components/login-page/singup-form/singup-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"login",component:LoginPageComponent},
  {path:"signup",component:SingupFormComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
