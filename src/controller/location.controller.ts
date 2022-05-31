import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Success, Failure } from '../types/response';
import axios from 'axios';


export const list = async (req: Request, res: Response) => {
  const { options } = req.body
  console.log(options)
  try {
    const response = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?analyze_type=similar&page=1&size=10&query=${opitons.location}}`, options.headers)
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }

}