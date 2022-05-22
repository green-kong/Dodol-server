import { Router } from 'express';
import * as capsuleController from '../../controller/capsule.controller';

const capsuleRouter = Router();

capsuleRouter.post('/list', capsuleController.list);

capsuleRouter.post('/create', capsuleController.create);

capsuleRouter.post('open', capsuleController.open);

export default capsuleRouter;
