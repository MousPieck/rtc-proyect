import jwt from 'jsonwebtoken';
import { varb } from '../content/varb';

export const generareJWT = (uid: string = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      varb.secretJWT,
      {
        expiresIn: '4h'
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        } else {
          resolve(token);
        }
      }
    );
  });
};

export const controllareJWT = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      varb.secretJWT,
      {
        maxAge: '24h'
      },
      (err, decode) => {
        if (err) {
          console.log(err);
          reject('No es un jwt valido');
        } else {
          resolve(decode);
        }
      }
    );
  });
};
