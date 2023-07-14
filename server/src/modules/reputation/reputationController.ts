import { Request, Response } from "express";

import { logger } from "../../helpers/logging";

import reputationService from "./reputationService";

class Controller {

    async getUsers(req: Request, res: Response) {
        try {

            const { size, page, sort, search } = req.query as { size: string, page: string, sort: string, search: string };

            const { users, length } = await reputationService.getUsers(+size, +page, sort, search);

            return res.json({ users, length });

        } catch (e: any) {
            logger.error({ message: e.message })

            return res.status(400).json({ message: e.message });
        }
    }

    async likeUser(req: Request, res: Response) {
        try {

            const { user } = req.query as { user: string }

            console.log(user);

            res.status(400).json({ message: 'sss' })

        } catch (e: any) {
            logger.error({ message: e.message });

            return res.status(400).json({ message: e.message });
        }
    }

    async unLikeUser(req: Request, res: Response) {
        try {

            const { user } = req.query as { user: string }

            console.log(user);

        } catch (e: any) {

            logger.error({ message: e.message });
            res.status(400).json({ message: e.message });
        }
    }

}


export default new Controller();