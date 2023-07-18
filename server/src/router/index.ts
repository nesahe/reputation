import { Router } from 'express';

import auth from '../modules/auth/authRoute.ts';
import reputation from '../modules/reputation/reputatuinRoute.ts';
import token from '../modules/token/tokenRoute.ts';


const router = Router();

router.use('/auth', auth);
router.use('/reputation', reputation);
router.use('/token', token);


export default router;