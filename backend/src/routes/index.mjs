import { Router } from 'express';
import UserAuthRoutes from './userRoutes.mjs';

const router = Router();

router.use('/api/users', UserAuthRoutes);

export default router;