import { Schema, model, models } from 'mongoose';

// Schema do usuário — armazena dados de autenticação e favoritos
const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Este e-mail já está cadastrado.'],
      required: [true, 'O e-mail é obrigatório.'],
    },
    username: {
      type: String,
      required: [true, 'O nome de usuário é obrigatório.'],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
  },
  { timestamps: true }
);

// Reutiliza o modelo existente em ambiente de desenvolvimento com hot-reload
const User = models.User || model('User', UserSchema);

export default User;
