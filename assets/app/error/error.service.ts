import { EventEmitter } from '@angular/core';
import { Error } from './error.model';

export class ErrorService {
  errorOccurred = new EventEmitter<Error>();

  handleError(error: any) {
    const errorMessage = error.error._message ? error.error._message : error.error.message;
    const errorData = new Error(error.title, errorMessage);
    this.errorOccurred.emit(errorData);
  }
}