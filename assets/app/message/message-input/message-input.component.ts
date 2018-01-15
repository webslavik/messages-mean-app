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
  message: Message;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.form = new FormGroup({
      'content': new FormControl(null)
    });

    this.messageService.messageIsEdit.subscribe(
      (message: Message) => this.message = message);
  }

  onSubmit() {
    if (this.message) {
      // Edit
      this.message.content = this.form.value.content;
      this.messageService.updateMessage(this.message)
          .subscribe(
            result => console.log(result)
          );
      this.message = null;
    } else {
      // Create
      const message = new Message(this.form.value.content, null);
      this.messageService.addMessage(message)
          .subscribe(
            res => console.log(res),
            err => console.log(err))
    }
    this.form.reset();
  }

  onClear() {
    this.form.reset();
  }
}