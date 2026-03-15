import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import PropertyCard from './PropertyCard';
import Link from 'next/link';

// Exibe os 3 imóveis mais recentes na página inicial
const HomeProperties = async () => {
  await connectDB();

  const recentPropertiesDocs = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  const recentProperties = recentPropertiesDocs.map(convertToSerializableObject);

  return (
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Imóveis Recentes
          </h2>

          {recentProperties.length === 0 ? (
            <p className='text-center text-gray-500'>
              Nenhum imóvel cadastrado ainda.
            </p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href='/properties'
          className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >
          Ver Todos os Imóveis
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
