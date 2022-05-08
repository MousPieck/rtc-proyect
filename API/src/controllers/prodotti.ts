import cloudinary from 'cloudinary';
import { NextFunction, Request, Response } from 'express';
import fs from 'fs-extra';

import { IUTente } from '../interface/model-utenti';
import { IUProdotti, Recette } from '../interface/prodotti-controllers';
import { Utente } from '../models/usuarios';
import { Prodotti } from './../models/produtti';
import jwt from 'jsonwebtoken';

cloudinary.v2.config({
  cloud_name: 'dxwmczjzj',
  api_key: '972962934716321',
  api_secret: 'fXKPcGK8JJ1SIPjRyK-iLuSf39k'
});
const prodottiGet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const [totale, prodotti]: [Number, Array<IUProdotti>] = await Promise.all([
      Prodotti.countDocuments(),
      Prodotti.find().populate('autore', 'nome')
    ]);

    res.json({
      totale,
      prodotti
    });
  } catch (error) {
    console.log(error);
  }
};

const prodottiGetId = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const [totale, prodotti]: [number, Array<IUProdotti>] = await Promise.all([
      Prodotti.countDocuments({ autore: req.uid }),
      Prodotti.find({ autore: req.uid }).populate('autore', 'nome cognome')
    ]);
    res.json({
      totale,
      prodotti
    });
  } catch (error) {
    console.log(error);
  }
};

const prodottiPost = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log(req.file);
    console.log(req.body);
    const { path }: any = req.file;
    const immagine: cloudinary.UploadApiResponse =
      await cloudinary.v2.uploader.upload(path);

    const { titolo, istruzioni }: Recette = req.body;
    const recette: Recette = {
      titolo,
      istruzioni,
      immagine: {
        img: immagine.url,
        public_id: immagine.public_id
      }
    };

    const [prodotti, utente]: [IUProdotti, IUTente] = await Promise.all([
      new Prodotti(recette),
      Utente.findById(req.uid)
    ]);
    prodotti.autore = utente._id;
    await prodotti.save();
    const prodott = await Prodotti.findOne(recette);

    await Promise.all([
      utente.prodotti.push(prodott._id),
      utente.save(),
      fs.unlink(path)
    ]);
    res.json({
      msg: `il utente (${utente.nome}) ora ha il prodotto: (${prodotti.titolo})`,
      prodottoID: prodotti._id
    });
  } catch (error) {
    console.log(error);
  }
};

const prodottiPut = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { path }: any = req.file;
  const { id } = req.params;
  try {
    const prodotto: Recette = await Prodotti.findById(id);

    const [, immagine]: [null, cloudinary.UploadApiResponse] =
      await Promise.all([
        cloudinary.v2.uploader.destroy(prodotto.immagine.public_id),
        cloudinary.v2.uploader.upload(path)
      ]);

    const { titolo, istruzioni }: Recette = req.body;
    const recette: Recette = {
      titolo,
      istruzioni,
      immagine: {
        img: immagine.url,
        public_id: immagine.public_id
      }
    };
    await Promise.all([
      Prodotti.findByIdAndUpdate(id, recette),
      fs.unlink(path)
    ]);
    res.json({
      msg: `Il prodotto: (${id} ha stato aggiornato con (${recette}))`
    });
  } catch (error) {
    console.log(error);
  }
};

const prodottiDeleteId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const [prodotto]: [Recette, null] = await Promise.all([
      Prodotti.findByIdAndDelete(id),
      Utente.findOneAndUpdate({ prodotti: id }, { $pull: { prodotti: id } })
    ]);
    await cloudinary.v2.uploader.destroy(prodotto.immagine.public_id);
    res.json({
      msg: `Il prodotto: (${id} ha stato eliminato`
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  prodottiGet,
  prodottiPost,
  prodottiGetId,
  prodottiPut,
  prodottiDeleteId
};
