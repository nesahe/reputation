import { Router } from "express";
import controller from './reputationController';
import { checkAuth } from "../auth/middlewares/checkAuth";

const router = Router();

router.get('/', checkAuth, controller.getUsers);

export default router;