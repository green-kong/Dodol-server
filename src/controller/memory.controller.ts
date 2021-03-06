import { Request, Response } from 'express';
import { Memory } from '../model/memory';
import { MemoryImg } from '../model/memory.img';
import { MemoryMusic } from '../model/memory.music';
import { Users } from '../model/user';
import { Success, Failure } from '../types/response';

export const create = async (req: Request, res: Response) => {
  const { music, ...rest } = req.body;
  try {
    const result = await Memory.create(rest);

    const files = req.files as Express.Multer.File[];
    files
      .map((v) => v.filename)
      .forEach(async (v) => {
        await MemoryImg.create({ m_idx: result.m_idx, img: v });
      });
    const create = await MemoryMusic.create({
      m_idx: result.m_idx,
      link: music,
    });
    const data = (await Memory.findOne({
      where: { m_idx: create.m_idx },
      include: [
        {
          model: Users,
          attributes: ['u_alias'],
        },
        {
          model: MemoryMusic,
          attributes: ['link'],
        },
        {
          model: MemoryImg,
          attributes: ['img'],
        },
      ],
    })) as Memory;

    const response: Success<Memory> = {
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

export const list = async (req: Request, res: Response) => {
  try {
    const data = await Memory.findAll({
      where: req.body,
      include: [
        {
          model: Users,
          attributes: ['u_alias'],
        },
        {
          model: MemoryMusic,
          attributes: ['link'],
        },
        {
          model: MemoryImg,
          attributes: ['img'],
        },
      ],
    });

    const response: Success<Memory[]> = {
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
