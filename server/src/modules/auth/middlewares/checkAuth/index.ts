import { Response, Request, NextFunction } from "express";
import tokenService from "../../../token/tokenService";
import { IRequestAuth } from "../../../../types";


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

        console.log(userData);

    } catch (e: any) {
        res.status(400).json({ message: e.message });
    }
}