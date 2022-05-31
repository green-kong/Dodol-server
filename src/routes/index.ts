import { Router } from 'express';
import capsuleRouter from './capsules/capsulesRouter';
import memoryRouter from './memory/memoryRouter';
import userRouter from './user/userRouter';
import upload from '../util/multer';
import loactionRouter from './location/locationRouter'

export const router = Router();

router.use('/capsule', capsuleRouter);

router.use('/memory', upload.array('memoryImg'), memoryRouter);

router.use('/user', userRouter);

router.use('/location', loactionRouter);
