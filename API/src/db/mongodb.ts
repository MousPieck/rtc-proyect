import mongoose from 'mongoose';
import { varb } from '../content/varb';

const dbConnection = async (): Promise<void> => {
  const db = mongoose;
  try {
    await db.connect(varb.mongodbUrl);
    console.log('DATABASE ONLINE');
  } catch (error) {
    console.log(error);
    throw new Error('(`*********Error nella database connect*********');
  }
};

export default dbConnection;
