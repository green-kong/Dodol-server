import { Request, Response } from 'express';
import { Users } from '../model/user';
import { Success, Failure } from '../types/response';
import axios from 'axios';

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
    res.send(response);
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

export const search = async (req: Request, res: Response) => {
  const { u_id } = req.body;
  try {
    const data = (await Users.findOne({ where: { u_id } })) as Users;

    const response: Success<Users> = {
      result: 'success',
      data,
    };

    res.send(response);
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

export const quit = async (req: Request, res: Response) => {
  try {
    await Users.destroy({ where: req.body });
    const response: Success<null> = {
      result: 'success',
      data: null,
    };
    res.send(response);
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

export const login = async (req: Request, res: Response) => {
  try {
    const body = {
      grant_type: 'authorization_code',
      client_id: '07e2741dea7ed6e8b2ba90e09024f231',
      redirect_uri: 'http://127.0.0.1/api/user/login',
      code: 'VwaBcornaagegct10pWv7uCR4IxFGdFEUXUrgBvHs7TA1svwURKB-ug_BdDMbCLVqZwoEwopcJ8AAAGA9P92Cw',
    };
    console.log(req.body);
    const url: string = 'https://kauth.kakao.com/oauth/token';
    const result = await axios.post(url, body);
    console.log(result.data);
  } catch (e: any) {
    console.log(e.message);
  }
};
