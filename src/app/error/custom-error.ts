export class CustomError {
    originalError: any;
    message: string;

    constructor(originalError, message) {
        this.originalError = originalError;
        this.message = message;
    }
}
