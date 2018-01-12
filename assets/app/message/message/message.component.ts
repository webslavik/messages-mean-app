import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styles: [`
    .author {
      display: inline-block;
      width: 80%;
      font-style: italic;
      font-size: 12px;
    }
    .config {
      display: inline-block;
      width: 19%;
      text-align: right;
      font-size: 12px;
    }
  `]
})
export class MessageComponent {
  @Input() message: Message;

  constructor(private messageService: MessageService) {}

  onEdit() {
    this.messageService.editMessage(this.message);
  }

  onDelete() {
    this.messageService.deleteMessage(this.message)
        .subscribe(
          response => console.log(response)
        );
  }

  belongsToUser() {
    return localStorage.getItem('userId') == this.message.userId;
  }
}