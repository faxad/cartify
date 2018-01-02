import { ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';

import { environment } from '../../environments/environment';

Raven
    .config(environment.sentryDns)
    .install();

export class AppErrorHandler implements ErrorHandler {
    handleError(err) {
        console.log('APP-ERROR: An error has occured');
        console.log(err);
        Raven.captureException(err);
    }
}
