import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Router
import { AppRoutingModule } from './app-router.module';

// Components
import { AppComponent } from "./app.component";
import { MessageComponent } from './message/message/message.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageInputComponent } from './message/message-input/message-input.component';
import { MessagesComponent } from './message/messages.component';
import { HeaderComponent } from './header.component';
import { AuthorizationComponent } from './auth/authorization.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorComponent } from './error/error.component';

// Services
import { AuthService } from './auth/auth.service';
import { MessageService } from './message/message.service';
import { ErrorService } from './error/error.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthorizationComponent,
    HeaderComponent,
    LogoutComponent,
    SigninComponent,
    SignupComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService, MessageService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule {}