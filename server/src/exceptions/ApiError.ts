export default class ApiError extends Error {
    status;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }

    static unAuthorizedError() {
        return new ApiError(401, 'The user is not logged in')
    }

    static badRequest(message: string) {
        return new ApiError(400, message);
    }

    static badRefreshToken() {
        return new ApiError(403, 'Login please');
    }
}