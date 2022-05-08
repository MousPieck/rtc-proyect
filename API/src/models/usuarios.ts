import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import { IUTente } from '../interface/model-utenti';
const UtenteSchema: Schema = new Schema(
  {
    nome: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    prodotti: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Prodotti'
      }
    ]
  },
  {
    timestamps: true
  }
);
UtenteSchema.pre<IUTente>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = bcrypt.genSaltSync(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

UtenteSchema.methods.compare = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compareSync(password, this.password);
};
// eslint-disable-next-line @typescript-eslint/ban-types
// UtenteSchema.methods.toJSON = function (): object {
//   const { __v, password, ...utente } = this.toObject();
//   return utente;
// };

export const Utente = model('Utente', UtenteSchema);
