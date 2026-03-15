# Template Imobiliária

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

> Template público em português do Brasil para imobiliárias, feito com Next.js, MongoDB e UI moderna. Ideal para startups, corretores e plataformas de anúncios de imóveis.

---

## 🔥 Preview

> 📌 Certifique-se de adicionar a imagem de captura de tela em `public/images/screen.jpg` para que ela apareça abaixo.

![Screenshot da Home](public/images/screen.jpg)

---

## ✨ Funcionalidades principais

- ✅ Autenticação via Google (NextAuth)
- 🛡️ Proteção de rotas e autorização baseada em usuário
- 🏠 CRUD completo de imóveis com upload de múltiplas fotos (Cloudinary)
- 🔍 Busca por localização, tipo de imóvel e filtros avançados
- 💬 Sistema de mensagens internas com contagem de não lidas
- 📌 Favoritos / imóveis salvos
- 🗺️ Mapa interativo com geolocalização (Mapbox)
- 🖼️ Galeria de fotos com lightbox (PhotoSwipe)
- 📩 Compartilhamento em redes sociais
- ⚡ UI responsiva com Tailwind + spinners e notificações (Toast)
- 📄 Páginas de perfil, anúncios, mensagens e edição de imóvel

---

## 🧩 Tecnologias utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [PhotoSwipe](https://photoswipe.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Share](https://github.com/nygardk/react-share)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🛠️ Como rodar localmente

### Pré-requisitos

- Node.js 18+ (recomendado)
- Conta no MongoDB Atlas (ou MongoDB local)
- Conta no Cloudinary
- Projeto configurado no Google Cloud (OAuth)
- Conta no Mapbox

### Passos

1. Clone este repositório:

```bash
git clone <URL_DO_REPO>
cd <PASTA_DO_PROJETO>
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo de ambiente:

```bash
cp .env.example .env.local
```

4. Preencha as variáveis em `.env.local` (MongoDB, Google OAuth, Cloudinary, Mapbox, etc.)

5. Rode em modo de desenvolvimento:

```bash
npm run dev
```

6. Acesse em:

```
http://localhost:3000
```

---

## 📁 Estrutura de pastas (resumida)

```
/
├─ app/                    # Páginas e rotas (Next.js App Router)
├─ components/             # Componentes reutilizáveis
├─ config/                 # Configurações (DB, Cloudinary, etc.)
├─ context/                # React context / global state
├─ models/                 # Schemas Mongoose
├─ public/                 # Imagens estáticas / assets públicos
├─ utils/                  # Helpers e utilitários
├─ .env.local              # Variáveis de ambiente (não comitado)
├─ next.config.mjs         # Configuração Next.js
├─ package.json
└─ README.md
```

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.
