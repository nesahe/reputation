import { Router } from "express";
import controller from './reputationController';
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.get('/', checkAuth, controller.getUsers);
router.post('/like', checkAuth, controller.likeUser);
router.post('/unlike', checkAuth, controller.unLikeUser);

export default router;