import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { varb } from '../content/varb';
export const validareJWT = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion'
    });
  }

  try {
    const { uid }: any = jwt.verify(token, varb.secretJWT, {
      maxAge: '4h'
    });

    req.uid = uid;
  } catch (error) {
    res.status(404).json({
      token: false
    });
  }

  next();
};
