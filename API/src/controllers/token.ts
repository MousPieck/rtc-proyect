import { Request, Response } from 'express';

export const token = (req: any, res: Response) => {
  if (req.uid) {
    res.status(200).json({
      token: true
    });
  }
};
