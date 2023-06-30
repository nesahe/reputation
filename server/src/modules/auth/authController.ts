import { Request, Response, NextFunction } from "express";
import authService from "./authService";


class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    async registration(req: Request, res: Response, next: NextFunction) {
        try {

            const { login, password, gender } = req.query as { login: string, password: string, gender: string }

            authService.registration(login, password, gender);
        } catch (e) {
            console.log(e)
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