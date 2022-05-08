import { Document, ObjectId } from 'mongoose';

interface IUTente extends Document {
  nome: string;

  email: string;
  password: string;
  prodotti: [
    _id: ObjectId,
    titolo: string,
    istruzioni: string,
    autore: {
      _id: ObjectId;
    }
  ];
}

export { IUTente };
