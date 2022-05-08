import { Schema, model } from 'mongoose';

const ProdottiSchema = new Schema(
  {
    titolo: {
      type: String,
      required: true,
      lowercase: true
    },
    istruzioni: {
      type: String,
      required: true,
      lowercase: true
    },
    immagine: {
      type: Object,
      required: true,
      img: {
        type: String,
        required: true
      },
      public_id: {
        type: String,
        required: true
      }
    },
    autore: {
      type: Schema.Types.ObjectId,
      ref: 'Utente'
    }
  },
  {
    timestamps: true
  }
);

export const Prodotti = model('Prodotti', ProdottiSchema);
