import { Router } from 'express';
import capsuleRouter from './capsules/capsulesRouter';
import memoryRouter from './memory/memoryRouter';
import upload from '../util/multer';

export const router = Router();

router.use('/capsule', capsuleRouter);

router.use('/memory', upload.array('memoryImg'), memoryRouter);
