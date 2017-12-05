import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BadInputError } from '../error/bad-input-error';
import { BaseError } from '../error/base-error';
import { ForbiddenError } from '../error/forbidden-error';
import { NotFoundError } from '../error/not-found-error';
import { UnreachableError } from '../error/unreachable-error';

export class AppError {
    static handle(error: Response) {
        let customError = null

        switch (error.status) {
            case 0: {
                customError = new UnreachableError(
                    error.json()) || 'Unreachable Error';
                break;
            }
            case 400: {
                customError = new BadInputError(
                    error.json()) || 'Bad Input Error';
                break;
            }
            case 403: {
                customError = new ForbiddenError() || 'Forbidden Error';
                break;
            }
            case 404: {
                customError = new NotFoundError() || 'Not Found Error';
                break;
            }
            default: {
                customError = new BaseError(error) || 'Application Error';
                break;
            }
        }

        return Observable.throw(customError);
    }
}
