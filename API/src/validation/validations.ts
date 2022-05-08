import { NextFunction, request, response } from 'express';
import { check } from 'express-validator';
import { validareJWT } from '../middlewares/validare-jwt';
import { validazioneCampi } from '../middlewares/validations';

const checkLogin = [
  check('email').notEmpty().isEmail().withMessage('non è un email valido'),
  check('password')
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage('la password deve avere almeno 6 caratteri'),
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
  }
];

const checkSignUp = [
  check('nome').notEmpty().withMessage('il nome non è valido'),
  check('email').notEmpty().isEmail().withMessage('non è un email valido'),
  check('password')
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
const checkProdottiId = [
  (req = request, res = response, next: NextFunction) => {
    validazioneCampi(req, res, next);
  }
];

const checktoken = [
  (req = request, res = response, next: NextFunction) => {
    validareJWT(req, res, next);
  }
];

export { checkLogin, checkSignUp, checkUtenteId, checktoken, checkProdottiId };
