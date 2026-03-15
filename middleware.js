// Middleware de autenticação: protege as rotas listadas abaixo
// Usuários não autenticados são redirecionados para a tela de login
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/properties/add', '/profile', '/properties/saved', '/messages'],
};
