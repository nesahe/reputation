import { Request, Response } from "express";

import { logger } from "../../helpers/logging";

import reputationService from "./reputationService";

class Controller {

    async getUsers(req: Request, res: Response) {
        try {

            const users = await reputationService.getUsers();

            return res.json({ users });

        } catch (e: any) {
            logger.error({ message: e.message })

            return res.status(400).json({ message: e.message });
        }
    }

}


export default new Controller();