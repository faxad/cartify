import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log('APP-ERROR: An error has occured');
        console.log(error);
    }
}
