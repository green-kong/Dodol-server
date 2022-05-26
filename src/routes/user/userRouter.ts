import { Router } from 'express';
import * as userController from '../../controller/user.controller';

const userRouter = Router();

userRouter.post('/editAlias', userController.editAlias);

userRouter.post('/search', userController.search);

userRouter.post('/quit', userController.quit);

userRouter.post('/login', userController.login);

userRouter.get('/login', userController.loading);
export default userRouter;
