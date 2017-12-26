import { Component } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  messages: Message[] = [
    new Message('Some message', 'Tom'),
    new Message('Crazy story man', 'Jack'),
  ];
}