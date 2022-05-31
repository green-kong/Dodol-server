import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Success, Failure } from '../types/response';


export const list = async (req: Request, res: Response) => {
  console.log(req.query)
  res.send('hey')
}