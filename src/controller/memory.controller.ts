import { Request, Response } from 'express';
import { Memory } from '../model/memory';
import { MemoryImg } from '../model/memory.img';
import { MemoryMusic } from '../model/memory.music';
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

    await MemoryMusic.create({ m_idx: result.m_idx, link: music });

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
