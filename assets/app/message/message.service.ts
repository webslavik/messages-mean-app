import { Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Inject({})
export class MessageService {
  private messages: Message[] = [
    {
      content: 'Fuck this all',
      username: 'Garold'
    }
  ];

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
    return this.messages;
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}