import { Router } from 'express';
import capsuleRouter from './capsules/capsulesRouter';

export const router = Router();

router.use('/capsule', capsuleRouter);
