// Componente de carregamento global — exibido pelo Next.js durante transições de rota
import Spinner from '@/components/Spinner';

const LoadingPage = () => {
  return <Spinner loading={true} />;
};

export default LoadingPage;
