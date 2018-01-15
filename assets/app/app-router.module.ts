import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MessagesComponent } from './message/messages.component';
import { AuthorizationComponent } from './auth/authorization.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent },
  { path: 'auth', component: AuthorizationComponent, loadChildren: './auth/auth.module#AuthModule' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}