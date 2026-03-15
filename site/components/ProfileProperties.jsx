'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import deleteProperty from '@/app/actions/deleteProperty';

// Lista de imóveis cadastrados pelo usuário no perfil
const ProfileProperties = ({ properties: initialProperties }) => {
  const [properties, setProperties] = useState(initialProperties);

  // Remove o imóvel da lista após confirmação e exclusão
  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir este imóvel? Esta ação não pode ser desfeita.'
    );

    if (!confirmed) return;

    await deleteProperty(propertyId);

    const updatedProperties = properties.filter((p) => p._id !== propertyId);
    setProperties(updatedProperties);
    toast.success('Imóvel excluído com sucesso!');
  };

  return properties.map((property) => (
    <div key={property._id} className='mb-10'>
      <Link href={`/properties/${property._id}`}>
        <Image
          className='h-32 w-full rounded-md object-cover'
          src={property.images[0]}
          alt={property.name}
          width={1200}
          height={300}
        />
      </Link>

      <div className='mt-2'>
        <p className='text-lg font-semibold'>{property.name}</p>
        <p className='text-gray-600'>
          Endereço: {property.location.street}, {property.location.city} -{' '}
          {property.location.state}
        </p>
      </div>

      <div className='mt-2'>
        <Link
          href={`/properties/${property._id}/edit`}
          className='bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
        >
          Editar
        </Link>
        <button
          onClick={() => handleDeleteProperty(property._id)}
          className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600'
          type='button'
        >
          Excluir
        </button>
      </div>
    </div>
  ));
};

export default ProfileProperties;
