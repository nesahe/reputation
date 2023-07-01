import { Request, Response, NextFunction } from "express";

import authService from "./authService";

import { logger } from "../../helpers/logging";

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {

            const { login, password } = req.query as { login: string, password: string }

            console.log(login, password);

        } catch (e) {
            console.log(e)
        }
    }

    async registration(req: Request, res: Response, next: NextFunction) {
        try {

            const { login, password, gender } = req.query as { login: string, password: string, gender: string }

            const { accessToken, refreshToken, user } = await authService.registration(login, password, gender);

            if (user.id) {
                return res.json({ message: 'Registration is successful' })
            }

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



        } catch (e) {
            console.log(e)
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}


export default new AuthController();