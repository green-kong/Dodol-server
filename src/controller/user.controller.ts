import { Request, Response } from 'express';
import { Users } from '../model/user';
import { Success, Failure } from '../types/response';

export const editAlias = async (req: Request, res: Response) => {
  try {
    const { u_idx, u_alias } = req.body;
    const result = await Users.update({ u_alias }, { where: { u_idx } });
    const data = (await Users.findOne({
      where: { u_idx: result[0] },
    })) as Users;
    const response: Success<Users> = {
      result: 'success',
      data,
    };
  } catch (e) {
    console.log(e);
    let msg = '';
    if (typeof e === 'string') {
      msg = e;
    } else if (e instanceof Error) {
      msg = e.message;
    }
    const response: Failure<string> = {
      result: 'fail',
      error: msg,
    };

    res.send(response);
  }
};
