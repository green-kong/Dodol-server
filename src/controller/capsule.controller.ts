import { Request, Response } from 'express';
import { Capsules } from '../model/capsule';
import { Collaborator } from '../model/collaborator';
import { Op } from 'sequelize';
import { Success, Failure } from '../types/response';
import { Hidden } from '../model/hidden';
import { Users } from '../model/user';

export const list = async (req: Request, res: Response) => {
  const { u_idx } = req.body;
  try {
    const collarborator = (
      await Collaborator.findAll({ where: { u_idx } })
    ).map((v) => v.c_idx);

    const tmp = await Capsules.findAll({
      where: {
        [Op.or]: [
          { c_generator: u_idx },
          { c_idx: { [Op.or]: collarborator } },
        ],
      },
      include: [
        {
          model: Users,
          attributes: ['u_alias'],
        },
        {
          model: Collaborator,
          include: [
            {
              model: Users,
              attributes: ['u_alias'],
            },
          ],
        },
      ],
    });

    const hiddenTmp = await Hidden.findAll({
      where: { u_idx },
      attributes: ['c_idx'],
    });

    const hiddenIdx = hiddenTmp.map((v) => v.c_idx);

    const data = tmp.filter((v) => !hiddenIdx.includes(v.c_idx));

    const response: Success<Capsules[]> = {
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

export const create = async (req: Request, res: Response) => {
  const { collaborator, ...rest } = req.body;
  try {
    let result: Capsules;
    if (req.file) {
      const { filename } = req.file as Express.Multer.File;
      result = await Capsules.create({ ...rest, c_thumb: filename });
    } else {
      result = await Capsules.create(rest);
    }
    collaborator.forEach(async (v: number) => {
      await Collaborator.create({ c_idx: result.c_idx, u_idx: v });
    });

    const data = (await Capsules.findOne({
      where: { c_idx: result.c_idx },
      include: [
        {
          model: Users,
          attributes: ['u_alias'],
        },
      ],
    })) as Capsules;

    const response: Success<Capsules> = {
      result: 'success',
      data,
    };

    res.send(response);
  } catch (e) {
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

export const hidden = async (req: Request, res: Response) => {
  try {
    await Hidden.create(req.body);
    const response: Success<null> = {
      result: 'success',
      data: null,
    };
    res.send(response);
  } catch (e) {
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

export const open = async (req: Request, res: Response) => {
  const { c_idx } = req.body;
  try {
    await Capsules.update({ isOpened: true }, { where: { c_idx } });
    const response: Success<null> = {
      result: 'success',
      data: null,
    };
    res.send(response);
  } catch (e) {
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
