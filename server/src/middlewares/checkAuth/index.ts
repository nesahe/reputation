import { Response, Request, NextFunction } from "express";
import tokenService from "../../modules/token/tokenService";
import ApiError from "../../exceptions/ApiError";


export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {

        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return next(ApiError.unAuthorizedError());
        }

        const token = authorizationHeader.split(' ')[1];

        if (!token) {
            return next(ApiError.unAuthorizedError());
        }

        const userData = tokenService.validateAccessToken(token);

        if (!userData) {
            return next(ApiError.unAuthorizedError());
        }

        req.userId = userData;

        next();

    } catch (e: any) {
        return next(ApiError.unAuthorizedError());
    }
}