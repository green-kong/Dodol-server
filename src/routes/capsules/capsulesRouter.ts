import { Router } from 'express';
import * as capsuleController from '../../controller/capsule.controller';

const capsuleRouter = Router();

capsuleRouter.post('/list', capsuleController.list);

export default capsuleRouter;
