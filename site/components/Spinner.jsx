'use client';
import ClipLoader from 'react-spinners/ClipLoader';

// Estilo de posicionamento centralizado do spinner
const override = {
  display: 'block',
  margin: '100px auto',
};

// Componente de carregamento reutilizável — exibe um spinner animado
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#3b82f6'
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label='Carregando'
    />
  );
};

export default Spinner;
