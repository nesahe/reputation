import { Router } from "express";
import controller from './reputationController';

const router = Router();

router.get('/', controller.getUsers);

export default router;