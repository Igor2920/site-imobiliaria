'use client';
import { useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

// Página de erro global — captura erros inesperados em toda a aplicação
const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    // Registra o erro no console para facilitar a depuração
    console.error(error);
  }, [error]);

  return (
    <section className='bg-blue-50 min-h-screen flex-grow'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='text-8xl text-yellow-400' />
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold mt-4 mb-2'>Algo deu errado!</h1>
            <p className='text-gray-500 text-xl mb-10'>
              {error.message || 'Ocorreu um erro inesperado.'}
            </p>
            <button
              onClick={() => reset()}
              className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded'
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
