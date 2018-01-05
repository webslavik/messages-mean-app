import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: 'authorization.component.html'
})
export class AuthorizationComponent {

  constructor(private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}