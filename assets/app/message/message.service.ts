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
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
      .map(response => { 
        const result = response;
        console.log(result);
        const message = new Message(
          result.obj.content, 
          result.user.firstName, 
          result.obj._id, 
          result.user._id);
        this.messages.push(message);
        return message;
      })
      .catch(err =>  Observable.throw(err));
  }

  getMessage() {
    return this.http.get('http://localhost:3000/message')
      .map(response => {
        const messages = response.obj;
        let transformedMessages: Message[] = [];
        for (let message of messages) {
          transformedMessages.push(new Message(
            message.content,
            message.user.firstName, 
            message._id, 
            message.user._id)
          );
        }
        this.messages = transformedMessages;
        return transformedMessages;
      });
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
      .map(response => { return response })
      .catch(err =>  Observable.throw(err));
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
      .map(response => { return response })
      .catch(err =>  Observable.throw(err));
  }
}