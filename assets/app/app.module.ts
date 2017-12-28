import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MessageInputComponent } from './message/message-input.component';
import { MessagesComponent } from './message/messages.component';
import { AuthorizationComponent } from './auth/authorization.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthorizationComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}