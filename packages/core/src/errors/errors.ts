export class EduSDKError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EduSDKError';
    }
}

export class InvalidInputError extends EduSDKError {
    constructor(message: string) {
        super(message);
        this.name = "InvalidInputError";
    }
}