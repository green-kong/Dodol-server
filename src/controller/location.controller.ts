import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Success, Failure } from '../types/response';
import axios from 'axios';

export const list = async (req: Request, res: Response) => {
  const options = req.body;
  const url = encodeURI(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${options.location.longitude}&y=${options.location.latitude}&input_coord=WGS84`
  );
  let locationList;
  try {
    const response = await axios.get(url, { headers: options.headers });
    locationList = response.data;
  } catch (e) {
    console.log(e);
  }
  res.json(locationList);
};
