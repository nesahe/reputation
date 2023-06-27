import { Router } from 'express';
import auth from '../modules/auth/authRoute.ts';
import user from '../modules/user/userRoute.ts';


const router = Router();

router.use('/auth', auth);
router.use('/user', user);


export default router;