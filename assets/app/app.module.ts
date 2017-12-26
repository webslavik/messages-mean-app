import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}