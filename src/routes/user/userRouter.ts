import { Router } from 'express';
import * as userController from '../../controller/user.controller';

const userRouter = Router();

userRouter.post('/editAlias', userController.editAlias);

export default userRouter;
