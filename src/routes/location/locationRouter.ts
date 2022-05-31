import { Router } from 'express';
import * as locationController from '../../controller/location.controller';

const locationRouter = Router();

locationRouter.get('/list', locationController.list);


// locationRouter.post('/hidden', capsuleController.hidden);

// locationRouter.post('/open', capsuleController.open);


export default locationRouter;
