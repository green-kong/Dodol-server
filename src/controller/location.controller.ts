import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Success, Failure } from '../types/response';
import axios from 'axios';


export const list = async (req: Request, res: Response) => {
  const options = req.body
  console.log(options)
  let locationList;
  try {
    const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?analyze_type=similar&page=1&size=10&query=${options.location}}`, options.headers)
    locationList = response.data
  } catch (e) {
    console.log(e)
  }
  res.json(locationList)
}