'use client';

import { SessionProvider } from 'next-auth/react';

// Provedor de sessão do NextAuth — envolve toda a aplicação para disponibilizar useSession
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
