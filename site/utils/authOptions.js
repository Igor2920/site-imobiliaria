import connectDB from '@/config/database';
import User from '@/models/User';
import GoogleProvider from 'next-auth/providers/google';

// Configurações de autenticação do NextAuth
export const authOptions = {
  providers: [
    // Provedor de autenticação via conta Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Chamado ao fazer login — cria o usuário no banco caso seja o primeiro acesso
    async signIn({ profile }) {
      await connectDB();

      const userExists = await User.findOne({ email: profile.email });

      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }

      return true;
    },

    // Popula a sessão com o ID do usuário armazenado no banco
    async session({ session }) {
      await connectDB();

      const user = await User.findOne({ email: session.user.email });
      session.user.id = user._id.toString();

      return session;
    },
  },
};
