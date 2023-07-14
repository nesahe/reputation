export default class ApiError extends Error {
    status;
    errors;

    constructor(status: number, message: string, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors
    }

    static unAuthorizedError() {
        return new ApiError(401, 'The user is not logged in')
    }

    static badRequest(message: string, errors = []) {
        return new ApiError(400, message, errors);
    }
}