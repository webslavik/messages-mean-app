import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { AuthRoutingModule } from './auth-router.module';

// Components
import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LogoutComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AuthModule {}