import { Router } from 'express';

import auth from '../modules/auth/authRoute.ts';
import reputation from '../modules/reputation/reputatuinRoute.ts';


const router = Router();

router.use('/auth', auth);
router.use('/reputation', reputation);


export default router;