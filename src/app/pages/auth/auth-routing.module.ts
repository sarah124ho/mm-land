import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { VerifyViewComponent } from './verify-view/verify-view.component';


const routes: Routes = [
  { path: '', component: AuthViewComponent },
  { path: 'verify', component: VerifyViewComponent },
  { path: 'login', component: LoginViewComponent },
 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
