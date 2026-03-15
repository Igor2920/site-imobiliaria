/** @type {import('next').NextConfig} */

// Configuração do Next.js
// remotePatterns: domínios externos permitidos para carregamento de imagens
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Imagens de perfil do Google OAuth
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        // Imagens hospedadas no Cloudinary
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
