import { Request, Response, NextFunction } from "express";

import reputationService from "./reputationService";

class Controller {

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {

            const { size, page, sort, search } = req.query as { size: string, page: string, sort: string, search: string };

            const { users, length } = await reputationService.getUsers(+size, +page, sort, search);

            return res.json({ users, length });

        } catch (e) {
            next(e);
        }
    }

    async likeUser(req: Request, res: Response, next: NextFunction) {
        try {

            const { user } = req.query as { user: string }

            console.log(user);

            res.status(400).json({ message: 'sss' })

        } catch (e) {
            next(e);
        }
    }

    async unLikeUser(req: Request, res: Response, next: NextFunction) {
        try {

            const { user } = req.query as { user: string }

        } catch (e) {
            next(e);
        }
    }

}


export default new Controller();