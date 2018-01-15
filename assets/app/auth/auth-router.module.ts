import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';


const authRoutes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent },
]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}