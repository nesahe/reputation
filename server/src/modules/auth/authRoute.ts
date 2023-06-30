import { Router } from "express";
import controller from './authController.ts'

const router = Router();

router.post('/login', controller.login);
router.post('/registration', controller.registration);
router.post('/logout', controller.logout);
router.get('/activate/:link', controller.activateAccount);
router.get('/refresh', controller.refresh);

export default router