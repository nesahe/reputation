import { Request, Response, NextFunction } from "express";

import ApiError from "../../exceptions/ApiError";
import authService from "../auth/authService";


class TokenController {

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {

            const { refreshToken } = req.cookies as { refreshToken: string };

            if (!refreshToken) {
                throw ApiError.unAuthorizedError();
            }

            const userData = await authService.refresh(refreshToken);

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json({ accessToken: userData.accessToken, user: userData.user });

        } catch (e) {
            next(e);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {

            const { refreshToken } = req.cookies as { refreshToken: string };

            if (!refreshToken) {
                throw ApiError.unAuthorizedError();
            }

            const result = await authService.logout(refreshToken);

            if (result) {
                res.clearCookie('refreshToken');
                return res.json({ message: result });
            }

            throw ApiError.unAuthorizedError();

        } catch (e) {
            next(e);
        }
    }

}

export default new TokenController();