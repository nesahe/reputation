import { Request, Response, NextFunction } from "express";

import authService from "./authService";
import ApiError from "../../exceptions/ApiError";

import { CLIENT_URL } from "../../constants";

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {

            const { login, password } = req.query as { login: string, password: string }
            const { accessToken, refreshToken } = await authService.login(login.toLowerCase(), password);

            res.cookie('refreshToken', refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json({ accessToken, message: 'Login Successful' });

        } catch (e) {
            next(e);
        }
    }

    async registration(req: Request, res: Response, next: NextFunction) {
        try {

            const { login, password, gender } = req.query as { login: string, password: string, gender: string }

            await authService.registration(login.toLowerCase(), password, gender);

            return res.json({ message: 'Registration is successful' })

        } catch (e) {
            next(e);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {

            const { refreshToken } = req.cookies as { refreshToken: string };

            if (!refreshToken) {
                throw ApiError.badRequest('Cookie not found');
            }

            const result = await authService.logout(refreshToken);

            if (result) {
                res.clearCookie('refreshToken');
                return res.json({ message: result });
            }

            throw ApiError.badRequest('Refresh token not found');

        } catch (e) {
            next(e);
        }
    }

    async activateAccount(req: Request, res: Response, next: NextFunction) {
        try {

            const link = req.params.link;

            await authService.activateAccount(link);

            res.redirect(`${CLIENT_URL}/login`);

        } catch (e) {
            next(e);
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {

            const id = req.userId;

            if (id.length === 0) {
                throw ApiError.badRequest('Error getting userId');
            }

            const user = await authService.getProfile(id);

            return res.json({ user });

        } catch (e) {
            next(e);
        }
    }
}


export default new AuthController();