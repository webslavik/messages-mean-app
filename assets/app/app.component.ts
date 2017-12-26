import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
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
export class AppComponent {
  message = {
    content: 'Some content',
    author: 'Tom'
  }
}