import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signip',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required, 
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}