import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { BadInputError } from 'app/error/bad-input-error';
import { BaseError } from 'app/error/base-error';
import { ForbiddenError } from 'app/error/forbidden-error';
import { NotFoundError } from 'app/error/not-found-error';
import { UnreachableError } from 'app/error/unreachable-error';
import * as Raven from 'raven-js';

import { environment } from '../../environments/environment';
import { CustomError } from './custom-error';

Raven
    .config(environment.sentryDns)
    .install();

export class AppErrorHandler implements ErrorHandler {
    handleError(err) {
        let error: any = null;
        let message: any = null;

        if (err instanceof CustomError) {
            error = err.originalError;
            message = err.message;
        } else {
            error = err;
        }

        if (error instanceof HttpErrorResponse) {
            message = 'BACKEND: ' + message

            switch (error.status) {
                case 0: {
                    error = new UnreachableError(error.error);
                    message = message + ' - Unreachable Error';
                    break;
                }
                case 400: {
                    error = new BadInputError(error.error);
                    message = message + ' - Bad Input Error';
                    break;
                }
                case 403: {
                    error = new ForbiddenError(error.error);
                    message = message + ' - Forbidden Error';
                    break;
                }
                case 404: {
                    error = new NotFoundError(error.error);
                    message = message + ' - Not Found Error';
                    break;
                }
                default: {
                    error = new BaseError(error.error)
                    message = message + ' - Base Error';
                    break;
                }
            }
        } else if (error instanceof Error) {
            message = 'FRONTEND: ' + message
            // Additional processing for GENERAL exceptions
        } else {
            // For anything else
        }

        console.log(error);
        console.log(message);

        Raven.captureMessage(error, {
            level: 'info',
            extra: {
                error: error,
                message: message,
            }
        });
    }
}
