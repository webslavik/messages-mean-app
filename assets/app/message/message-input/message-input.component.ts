import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { MessageService } from '../message.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {

  form: FormGroup;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'content': new FormControl(null)
    });
  }

  onSubmit() {
    const message = new Message(this.form.value.content, 'Jack');
    this.messageService.addMessage(message)
        .subscribe(
          res => console.log(res),
          err => console.log(err))
    this.form.reset();
  }
}