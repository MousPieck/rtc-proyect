import { NextFunction, request, response } from 'express';
import { body, header, param } from 'express-validator';
import { validareJWT } from '../middlewares/validare-jwt';
import { validazioneCampi } from '../middlewares/validations';

const checkLogin = [
  body('email').notEmpty().isEmail().withMessage('non è un email valido'),
  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('la password deve avere almeno 6 caratteri'),
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
  }
];

const checkSignUp = [
  body('nome').notEmpty().withMessage('il nome non è valido'),
  body('email').notEmpty().isEmail().withMessage('non è un email valido'),
  body('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('la password deve avere almeno 6 caratteri'),
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
  }
];

const checkUtenteId = [
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
    validareJWT(req, res, next);
  }
];
const checkProdottiGetId = [
  header('x-token').isJWT().withMessage(''),

  (req = request, res = response, next: NextFunction) => {
    validareJWT(req, res, next);
  }
];
const checkProdottiPostId = [
  header('x-token').isJWT().withMessage(''),

  body('titolo').notEmpty().withMessage(''),
  body('istruzioni').notEmpty().withMessage(''),

  (req = request, res = response, next: NextFunction) => {
    validareJWT(req, res, next);
  }
];

const checkProdottiModificareId = [
  header('x-token').isJWT().withMessage(''),
  param('id').isMongoId().withMessage(''),

  body('titolo').notEmpty().withMessage(''),
  body('istruzioni').notEmpty().withMessage(''),

  (req = request, res = response, next: NextFunction) => {
    validareJWT(req, res, next);
  }
];

const checkProdottiEliminareId = [
  header('x-token').isJWT().withMessage(''),

  param('id').isMongoId().withMessage(''),

  (req = request, res = response, next: NextFunction) => {
    validareJWT(req, res, next);
  }
];

const checktoken = [
  (req = request, res = response, next: NextFunction) => {
    validareJWT(req, res, next);
  }
];

export {
  checkLogin,
  checkSignUp,
  checkUtenteId,
  checktoken,
  checkProdottiGetId,
  checkProdottiEliminareId,
  checkProdottiModificareId,
  checkProdottiPostId
};
