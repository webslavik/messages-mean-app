import { Inject } from "@angular/core";
import { Message } from "./message.model";

@Inject({})
export class MessageService {
  private messages: Message[] = [
    {
      content: 'Fuck this all',
      username: 'Garold'
    }
  ];

  addMessage(message: Message) {
    this.messages.push(message);
    console.log(this.messages);
  }

  getMessage() {
    return this.messages;
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}