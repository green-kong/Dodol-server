import { Router } from 'express';
import * as capsuleController from '../../controller/capsule.controller';
import upload from '../../util/multer';

const capsuleRouter = Router();

capsuleRouter.post('/list', capsuleController.list);

capsuleRouter.post(
  '/create',
  upload.single('capsuleImg'),
  capsuleController.create
);

capsuleRouter.post('/hidden', capsuleController.hidden);

export default capsuleRouter;
