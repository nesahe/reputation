import { Response, Request, NextFunction } from "express";
import tokenService from "../../../token/tokenService";


export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    try {

        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            throw new Error('Access token not found');
        }

        const token = authorizationHeader.split(' ')[1];

        if (!token) {
            throw new Error('Access token not found');
        }

        const userData = tokenService.validateAccessToken(token);

        req.userId = userData || '';

        next();

    } catch (e: any) {
        res.status(401).json({ message: e.message });
    }
}