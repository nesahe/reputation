import { Router } from 'express';

import auth from '../modules/auth/authRoute.ts';
import user from '../modules/user/userRoute.ts';
import reputation from '../modules/reputation/reputatuinRoute.ts';


const router = Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/reputation', reputation);


export default router;