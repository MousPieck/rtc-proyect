import { Document, ObjectId } from 'mongoose';
interface IUProdotti extends Document {
  id?: ObjectId;
  titolo?: string;
  istruzioni?: string | number;
  autore?: {
    _id?: ObjectId;
  };
}
interface Recette {
  titolo: string;
  istruzioni: string;
  immagine: {
    img: string;
    public_id: string;
  };
}

export { IUProdotti, Recette };
