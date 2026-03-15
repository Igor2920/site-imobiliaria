import connectDB from '@/config/database';
import Property from '@/models/Property';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';
import { convertToSerializableObject } from '@/utils/convertToObject';
import PropertyCard from '@/components/PropertyCard';

// Página de imóveis salvos/favoritados pelo usuário logado
const SavedPropertiesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  // Busca o usuário e popula a lista de imóveis salvos
  const { bookmarks } = await User.findById(userId).populate('bookmarks').lean();
  const properties = bookmarks.map(convertToSerializableObject);

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <h1 className='text-2xl mb-4 font-bold'>Imóveis Salvos</h1>
        {properties.length === 0 ? (
          <p className='text-gray-500'>Você não salvou nenhum imóvel ainda.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
