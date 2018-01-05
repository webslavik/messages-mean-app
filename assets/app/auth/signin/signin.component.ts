import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

import { User } from '../user.model';

@Component({
  selector: 'app-signip',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required, 
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const user = new User(this.form.value.email, this.form.value.password);
    this.authService.signin(user)
        .subscribe(
          data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl('/');
          }
        );
  }
}