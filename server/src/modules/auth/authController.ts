import { Request, Response, NextFunction } from "express";

import authService from "./authService";

import { logger } from "../../helpers/logging";

import { CLIENT_URL } from "../../constants";

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {

            const { login, password } = req.query as { login: string, password: string }
            const { accessToken, refreshToken, user } = await authService.login(login.toLowerCase(), password);

            res.cookie('refreshToken', refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json({ accessToken, message: 'Login Successful' });

        } catch (e: any) {
            logger.error({ message: e.message })

            return res.status(400).json({ message: e.message });
        }
    }

    async registration(req: Request, res: Response, next: NextFunction) {
        try {

            const { login, password, gender } = req.query as { login: string, password: string, gender: string }

            await authService.registration(login.toLowerCase(), password, gender);

            return res.json({ message: 'Registration is successful' })

        } catch (e: any) {
            logger.error({ message: e.message })

            return res.status(400).json({ message: e.message });
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    async activateAccount(req: Request, res: Response, next: NextFunction) {
        try {

            const link = req.params.link;

            await authService.activateAccount(link);

            res.redirect(`${CLIENT_URL}/registration`);

        } catch (e: any) {
            logger.error({ message: e.message })

            return res.status(400).json({ message: e.message });
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    async getProfile(req: Request, res: Response) {
        try {

            const id = req.userId;

            if (id.length === 0) {
                throw new Error('Error getting userId');
            }

            const user = await authService.getProfile(id);

            return res.json({ user });

        } catch (e: any) {
            logger.error({ message: e.message })

            return res.status(400).json({ message: e.message });
        }
    }
}


export default new AuthController();