import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import PropertyCard from '@/components/PropertyCard';
import Pagination from '@/components/Pagination';

// Número de imóveis exibidos por página
const PAGE_SIZE = 6;

// Página de listagem de todos os imóveis disponíveis
const PropertiesPage = async ({ searchParams: { page = 1 } }) => {
  await connectDB();

  const skip = (page - 1) * PAGE_SIZE;

  const total = await Property.countDocuments({});
  const propertiesDocs = await Property.find({}).skip(skip).limit(PAGE_SIZE).lean();
  const properties = propertiesDocs.map(convertToSerializableObject);

  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <h1 className='text-2xl font-bold text-white text-center'>
            Imóveis Disponíveis
          </h1>
        </div>
      </section>

      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          {properties.length === 0 ? (
            <p className='text-center text-gray-500'>
              Nenhum imóvel encontrado.
            </p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
          <Pagination
            page={parseInt(page)}
            pageSize={PAGE_SIZE}
            totalItems={total}
          />
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
