import { Request, Response } from 'express';
import { Users } from '../model/user';
import { Success, Failure } from '../types/response';
import axios, { AxiosResponse } from 'axios';
import path from 'path';
import { sequelize } from '../model';

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
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true });
    await Users.destroy({ where: req.body });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true });
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
  console.log(req.body);
  const { ACCESS_TOKEN } = req.body;
  let tmp: AxiosResponse;
  try {
    const url = 'https://kapi.kakao.com/v2/user/me';
    const Header = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };
    tmp = await axios.get(url, Header);
  } catch (e) {
    console.log('액시오스 에러');
    console.log(e);

    const response: Failure<string> = {
      result: 'fail',
      error: '토큰 에러',
    };

    res.send(response);
    return;
  }

  try {
    const { data } = tmp as AxiosResponse;
    const { id, properties } = data;
    const { nickname } = properties;

    const result = await Users.findOne({ where: { u_id: id } });

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

export const loading = (req: Request, res: Response) => {
  const adf = path.join(__dirname, '../../loading.html');
  console.log(adf);
  res.sendFile(adf);
};
