import { Inject, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Inject({})
export class MessageService {
  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();

  constructor(private http: HttpClient) {}

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:3000/message', body, {headers: headers})
      .map(response => { return response })
      .catch(err =>  Observable.throw(err));
  }

  getMessage() {
    return this.http.get('http://localhost:3000/message')
      .map(response => {
        const messages = response.obj;
        let transformedMessages: Message[] = [];
        for (let message of messages) {
          transformedMessages.push(new Message(message.content, 'Jack', message._id, null));
        }

        this.messages = transformedMessages;
        return transformedMessages;
      });
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage() {
    // ...
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}