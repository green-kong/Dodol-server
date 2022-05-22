import { Router } from 'express';
import * as memoryController from '../../controller/memory.controller';

const memoryRouter = Router();

memoryRouter.post('/create', memoryController.create);

export default memoryRouter;
