import { NextFunction, Request, Response } from 'express';
import { IUTente } from '../interface/model-utenti';
import { Prodotti } from '../models/produtti';
import { Utente } from '../models/usuarios';

const utenteGet = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const [totale, utenti]: [Number, Array<IUTente>] = await Promise.all([
      Utente.countDocuments(),
      Utente.find().populate('prodotti', 'titolo istruzioni')
    ]);
    res.json({
      totale,
      utenti
    });
  } catch (error) {
    console.log(error);
  }
};

const utenteGetID = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  try {
    const utenti: IUTente = await Utente.findById(id).populate(
      'prodotti',
      'titolo istruzioni'
    );
    if (!utenti) {
      res.json({
        Atenzione: `Il cliente con il ID ${id} non esiste`,
        stato: false
      });
      return;
    }
    res.json({
      stato: true,
      id: utenti
    });
  } catch (error) {
    console.log(error);
  }
};

const utentePut = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  try {
    await Utente.findByIdAndUpdate(id, req.body);
    res.json({
      Msg: 'Aggiornamento fatto'
    });
  } catch (error) {
    console.log(error);
    res.json({
      Atenzione: `non è stato possibile aggiornare`
    });
  }
};

const utenteDelete = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.uid;
    const utent: IUTente = await Utente.findById(id);
    utent.prodotti.forEach(async (p: any) => {
      await Prodotti.findByIdAndDelete(p._id);
    });
    const utente = await Utente.findByIdAndDelete(id);
    if (!utente) {
      res.json({
        msg: `il utente con questo id: {${id}}
              non esiste`
      });
      return;
    }
    res.json({
      msg: `il utente con questo id: {${id}}
            ha stato eliminato`
    });
  } catch (error) {
    console.log(error);
  }
};

export { utenteGet, utenteGetID, utentePut, utenteDelete };
