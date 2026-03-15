'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Formulário de busca de imóveis por localização e tipo
const PropertySearchForm = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('All');

  const router = useRouter();

  // Redireciona para a listagem geral ou para os resultados filtrados
  const handleSubmit = (e) => {
    e.preventDefault();

    if (location === '' && propertyType === 'All') {
      router.push('/properties');
    } else {
      const query = `?location=${location}&propertyType=${propertyType}`;
      router.push(`/properties/search-results${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
    >
      {/* Campo de localização / palavras-chave */}
      <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
        <label htmlFor='location' className='sr-only'>
          Localização
        </label>
        <input
          type='text'
          id='location'
          placeholder='Digite palavras-chave ou a localização'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Seletor de tipo de imóvel */}
      <div className='w-full md:w-2/5 md:pl-2'>
        <label htmlFor='property-type' className='sr-only'>
          Tipo de Imóvel
        </label>
        <select
          id='property-type'
          className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500'
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value='All'>Todos</option>
          <option value='Apartment'>Apartamento</option>
          <option value='Studio'>Studio</option>
          <option value='Condo'>Condomínio</option>
          <option value='House'>Casa</option>
          <option value='Cabin Or Cottage'>Chalé ou Cabana</option>
          <option value='Loft'>Loft</option>
          <option value='Room'>Quarto</option>
          <option value='Other'>Outro</option>
        </select>
      </div>

      {/* Botão de busca */}
      <button
        type='submit'
        className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500'
      >
        Buscar
      </button>
    </form>
  );
};

export default PropertySearchForm;
