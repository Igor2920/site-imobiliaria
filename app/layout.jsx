import '@/assets/styles/globals.css';
import 'photoswipe/dist/photoswipe.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { GlobalProvider } from '@/context/GlobalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Metadados padrão da aplicação — altere para as informações da sua imobiliária
export const metadata = {
  title: 'Template Imobiliária',
  description: 'Encontre o imóvel ideal para alugar ou comprar.',
  keywords: 'imóveis, aluguel, venda, apartamento, casa, imobiliária',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang='pt-BR'>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
