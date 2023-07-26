import { Router } from "express";
import controller from './authController.ts'

import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.post('/login', controller.login);
router.post('/registration', controller.registration);
router.get('/activate/:link', controller.activateAccount);
router.get('/profile', checkAuth, controller.getProfile);

export default router