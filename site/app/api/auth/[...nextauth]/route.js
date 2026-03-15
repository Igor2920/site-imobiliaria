import NextAuth from 'next-auth';
import { authOptions } from '@/utils/authOptions';

// Rota de autenticação do NextAuth — gerencia login, logout e sessão
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
