'use client';

import { useRouter } from 'next/navigation';

// Componente de paginação para listagens de imóveis
const Pagination = ({ page, pageSize, totalItems }) => {
  const router = useRouter();

  const totalPages = Math.ceil(totalItems / pageSize);

  // Navega para a página anterior ou seguinte
  const handlePageChange = (newPage) => {
    router.push(`/properties?page=${newPage}`);
  };

  return (
    <section className='container mx-auto flex justify-center items-center my-8'>
      <button
        className='mr-2 px-2 py-1 border border-gray-300 rounded disabled:opacity-50'
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Anterior
      </button>

      <span className='mx-2'>
        Página {page} de {totalPages}
      </span>

      <button
        className='ml-2 px-2 py-1 border border-gray-300 rounded disabled:opacity-50'
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Próxima
      </button>
    </section>
  );
};

export default Pagination;
