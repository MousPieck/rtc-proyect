import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { IUTente } from '../interface/model-utenti';
import { generareJWT } from '../libs/generareJWT';
import { Utente } from './../models/usuarios';

const loginPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const { email, password }: IUTente = req.body;

    const utent: IUTente = await Utente.findOne({ email });
    if (!utent) {
      return res.json({
        msgError: `Il e-mail: ${email},non esiste`
      });
    } else {
      const pass: Boolean = bcrypt.compareSync(password, utent.password);

      if (pass) {
        return res.status(200).json({
          msg: `login`,
          token: await generareJWT(utent._id),
          nome: utent.nome
        });
      } else {
        return res.status(404).json({
          msgError: `La password non è corretta`
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error
    });
  }
};

const signUpPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    console.log(req.body);
    const utente: IUTente = new Utente(req.body);
    const { email }: IUTente = req.body;
    const utent: IUTente = await Utente.findOne({ email });
    if (utent) {
      res.status(400).json({
        msgError: 'Il email esiste'
      });
      return;
    }
    await utente.save();
    res.status(200).json({
      msg: 'register'
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error
    });
  }
};
export { loginPost, signUpPost };
