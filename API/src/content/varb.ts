import dotenv from 'dotenv';
dotenv.config();
export const varb = {
  port: process.env.PORT as string | number,
  mongodbUrl: process.env.MONGODB_URL as string,
  usersPath: '/api/utenti',
  usersAth: '/api/',
  prodottiPath: '/api/prodotti',
  tokenPath: '/api/token',
  secretJWT: 'gjwks@gjwt1238@skf2',
  statof: { stato: false },
  statot: { stato: true }
};
