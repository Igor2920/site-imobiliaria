# 🏠 Imobiliária — Template Next.js

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)
![NextAuth](https://img.shields.io/badge/NextAuth-4-purple?style=for-the-badge)
![License](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)

> Template completo de site imobiliário em **português do Brasil**, desenvolvido com Next.js 14, MongoDB e Tailwind CSS.

---

## 📸 Preview

![Screenshot da Home](public/images/screen.png)

---

## ✨ Funcionalidades

- 🔐 Autenticação via Google (NextAuth.js)
- 🏘️ Listagem, busca e filtro de imóveis
- ➕ Cadastro e edição de imóveis (CRUD completo)
- 🖼️ Upload de múltiplas imagens (Cloudinary)
- 🗺️ Mapa interativo por endereço (Mapbox)
- 💬 Sistema de mensagens internas
- 🔔 Notificações de mensagens não lidas
- 🔖 Salvar imóveis nos favoritos
- 📤 Compartilhar imóveis nas redes sociais
- 📱 Design responsivo (mobile-first)
- ⚡ Next.js Server Actions
- 🇧🇷 100% em Português do Brasil

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [Next.js 14](https://nextjs.org/) | Framework React |
| [MongoDB Atlas](https://www.mongodb.com/) | Banco de dados |
| [Mongoose](https://mongoosejs.com/) | ODM do MongoDB |
| [NextAuth.js](https://next-auth.js.org/) | Autenticação |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização |
| [Cloudinary](https://cloudinary.com/) | Upload de imagens |
| [Mapbox](https://www.mapbox.com/) | Mapas interativos |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Notificações |
| [PhotoSwipe](https://photoswipe.com/) | Galeria de imagens |
| [React Share](https://github.com/nygardk/react-share) | Compartilhamento social |

---

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18+
- Conta no [MongoDB Atlas](https://www.mongodb.com/)
- Conta no [Cloudinary](https://cloudinary.com/)
- Conta no [Google Cloud Console](https://console.cloud.google.com/) (OAuth)
- Conta no [Mapbox](https://www.mapbox.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/site-imobiliaria.git

# Entre na pasta
cd site-imobiliaria

# Instale as dependências
npm install
```

### Variáveis de ambiente

Renomeie `.env.example` para `.env.local` e preencha:

```env
NEXT_PUBLIC_DOMAIN=http://localhost:3000
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/imobiliaria
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua-chave-secreta
GOOGLE_CLIENT_ID=seu-google-client-id
GOOGLE_CLIENT_SECRET=seu-google-client-secret
CLOUDINARY_CLOUD_NAME=seu-cloud-name
CLOUDINARY_API_KEY=sua-api-key
CLOUDINARY_API_SECRET=seu-api-secret
NEXT_PUBLIC_MAPBOX_TOKEN=seu-token-mapbox
NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=sua-chave-geocoding
```

### Rodar

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Estrutura do Projeto

```
├── app/
│   ├── actions/          # Server Actions
│   ├── api/auth/         # Rota NextAuth
│   ├── messages/         # Página de mensagens
│   ├── profile/          # Página de perfil
│   └── properties/       # Páginas de imóveis
├── components/           # Componentes React
├── config/               # Configurações (DB, Cloudinary)
├── context/              # Contexto global
├── models/               # Modelos Mongoose
├── utils/                # Utilitários
└── public/               # Arquivos estáticos
```

---

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
