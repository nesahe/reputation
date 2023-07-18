import { Router } from "express";

import controller from './tokenController'

const router = Router();

router.post('/logout', controller.logout);
router.get('/refresh', controller.refresh);

export default router;