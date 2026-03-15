# [Nome da Imobiliária]

> Plataforma web para busca e anúncio de imóveis para locação, desenvolvida com Next.js e MongoDB.

![Captura de tela da aplicação](public/images/screen.jpg)

## Funcionalidades

- Autenticação de usuários via Google (NextAuth)
- Autorização e proteção de rotas
- Perfil do usuário com seus anúncios
- CRUD completo de imóveis
- Upload de múltiplas imagens (Cloudinary)
- Busca de imóveis por localização e tipo
- Sistema de mensagens internas com notificações de não lidas
- Galeria de fotos com lightbox (PhotoSwipe)
- Mapa interativo (Mapbox)
- Notificações toast
- Imóveis favoritos / salvos
- Compartilhamento em redes sociais
- Spinners de carregamento
- Design responsivo (Tailwind CSS)
- Página 404 personalizada
- Next.js Server Actions

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox / React Map GL](https://www.mapbox.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [PhotoSwipe](https://photoswipe.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Share](https://github.com/nygardk/react-share)
- [React Spinners](https://www.npmjs.com/package/react-spinners)

## Primeiros Passos

### Pré-requisitos

- Node.js versão 18 ou superior
- Conta no [MongoDB Atlas](https://www.mongodb.com/)
- Conta no [Cloudinary](https://cloudinary.com/)
- Conta no [Google Cloud Console](https://console.cloud.google.com/) (OAuth)
- Conta no [Mapbox](https://www.mapbox.com/)

### Configuração do arquivo `.env`

Renomeie o arquivo `.env.example` para `.env.local` e preencha todas as variáveis de ambiente conforme as instruções contidas nele.

### Instalação das dependências

```bash
npm install
```

### Executar em modo de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para produção

```bash
npm run build
npm start
```

## Licença

Este projeto está licenciado sob a licença MIT.
