import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessagesComponent } from './messages.component';

// Services
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService]
})
export class MessageModule {}