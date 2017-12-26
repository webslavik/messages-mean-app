import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';

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
  @Output() editClicked = new EventEmitter<string>();

  onEdit() {
    this.editClicked.emit('New value for message');
  }
}