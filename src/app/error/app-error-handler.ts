import { ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';

import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UnreachableError } from 'app/error/unreachable-error';
import { BadInputError } from 'app/error/bad-input-error';
import { ForbiddenError } from 'app/error/forbidden-error';
import { NotFoundError } from 'app/error/not-found-error';
import { BaseError } from 'app/error/base-error';

Raven
    .config(environment.sentryDns)
    .install();

export class AppErrorHandler implements ErrorHandler {
    handleError(err) {
        let error = err.error;
        let customError = null;
        let customMessage = null;

        if (error instanceof Error) {
            customMessage = 'CLIENT: Error';
        } else {
            switch (error.status) {
                case 0: {
                    customError = new UnreachableError(error);
                    customMessage = 'BACKEND: Unreachable Error';
                    break;
                }
                case 400: {
                    customError = new BadInputError(error);
                    customMessage = 'BACKEND: Bad Input Error';
                    break;
                }
                case 403: {
                    customError = new ForbiddenError(error);
                    customMessage = 'BACKEND: Forbidden Error';
                    break;
                }
                case 404: {
                    customError = new NotFoundError(error);
                    customMessage = 'BACKEND: Not Found Error';
                    break;
                }
                default: {
                    customError = new BaseError(error)
                    customMessage = 'BACKEND: Base Error';
                    break;
                }
            }
        }

        console.log(error);

        Raven.captureMessage(error, {
            level: 'info',
            extra: {
                error: error,
                friendly: customMessage,
                additional: err.message
            }
        });
    }
}
