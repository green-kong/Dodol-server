import { Request, Response } from 'express';
import { Capsules } from '../model/capsule';
import { Collaborator } from '../model/collaborator';
import { Op } from 'sequelize';

export const list = async (req: Request, res: Response) => {
  const { u_idx } = req.body;
  const collarborator = (await Collaborator.findAll({ where: { u_idx } })).map(
    (v) => v.c_idx
  );

  const result = await Capsules.findAll({
    where: {
      [Op.or]: [{ c_generator: u_idx }, { c_idx: { [Op.or]: collarborator } }],
    },
  });

  res.send(result);
};
