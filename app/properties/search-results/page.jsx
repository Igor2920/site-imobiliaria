import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

// Página de resultados de busca — filtra imóveis por localização e/ou tipo
const SearchResultsPage = async ({
  searchParams: { location, propertyType },
}) => {
  await connectDB();

  // Monta o padrão de busca por localização (cidade, estado, rua ou CEP)
  const locationPattern = new RegExp(location, 'i');

  let query = {
    $or: [
      { name: locationPattern },
      { description: locationPattern },
      { 'location.street': locationPattern },
      { 'location.city': locationPattern },
      { 'location.state': locationPattern },
      { 'location.zipcode': locationPattern },
    ],
  };

  // Aplica filtro de tipo de imóvel caso não seja "All" (Todos)
  if (propertyType && propertyType !== 'All') {
    const typePattern = new RegExp(propertyType, 'i');
    query.type = typePattern;
  }

  const propertiesDocs = await Property.find(query).lean();
  const properties = propertiesDocs.map(convertToSerializableObject);

  return (
    <>
      {/* Barra de busca */}
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>

      {/* Resultados */}
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Link
            href='/properties'
            className='flex items-center text-blue-500 hover:underline mb-3'
          >
            <FaArrowAltCircleLeft className='mr-2 mb-1' /> Ver Todos os Imóveis
          </Link>
          <h1 className='text-2xl mb-4 font-bold'>Resultados da Busca</h1>
          {properties.length === 0 ? (
            <p className='text-gray-500'>
              Nenhum imóvel encontrado para os critérios informados.
            </p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
