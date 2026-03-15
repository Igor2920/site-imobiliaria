import mongoose from 'mongoose';

// Variável de controle para reutilizar a conexão já estabelecida (evita múltiplas conexões)
let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('MongoDB já está conectado.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('Conectado ao MongoDB com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

export default connectDB;
