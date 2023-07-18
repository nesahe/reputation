import { Request, Response, NextFunction } from "express";

import reputationService from "./reputationService";

class Controller {

    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {

            const { size, page, sort, search } = req.query as { size: string, page: string, sort: string, search: string };

            const { userId } = req as { userId: string };

            const { users, length } = await reputationService.getUsers(userId, +size, +page, sort, search);

            return res.json({ users, length });

        } catch (e) {
            next(e);
        }
    }

    async likeUser(req: Request, res: Response, next: NextFunction) {
        try {

            const { user } = req.query as { user: string }

            const profileId = req.userId;

            await reputationService.likeUser(user, profileId);

            return res.json({ message: true });

        } catch (e) {
            next(e);
        }
    }

    async unLikeUser(req: Request, res: Response, next: NextFunction) {
        try {

            const { user } = req.query as { user: string };

            const profileId = req.userId;

            await reputationService.unLikeUser(user, profileId);

            return res.json({ message: true });

        } catch (e) {
            next(e);
        }
    }

}


export default new Controller();