import { Request, Response } from 'express';
import { Users } from '../model/user';
import { Success, Failure } from '../types/response';
import axios, { AxiosResponse } from 'axios';

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
  const { ACCESS_TOKEN } = req.body;
  let tmp: AxiosResponse<any> | Failure<any>;
  try {
    const url = 'https://kapi.kakao.com/v2/user/me';
    const Header = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    tmp = await axios.get(url, Header);
    console.log(tmp);
  } catch (err) {
    console.log(err);
    tmp = {
      result: 'fail',
      error: err,
    };
    res.send(tmp);
  }

  try {
    const { data } = tmp as AxiosResponse;
    const { id, properties } = data;
    const { nickname } = properties;

    const result = await Users.findOne({ where: { u_id: id } });
    console.log(result);

    if (result) {
      const response: Success<Users> = {
        result: 'success',
        data: result,
      };
      res.send(response);
    } else {
      const payload = {
        u_id: id,
        u_alias: nickname,
      };
      await Users.create(payload as any);
      const data = (await Users.findOne({ where: { u_id: id } })) as Users;
      console.log(data);
      const response: Success<Users> = {
        result: 'success',
        data,
      };

      res.send(response);
    }
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
