import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import FeaturedPropertyCard from './FeaturedPropertyCard';

// Seção de imóveis em destaque — exibida na página inicial
const FeaturedProperties = async () => {
  await connectDB();

  const featuredPropertiesDocs = await Property.find({ is_featured: true })
    .lean();

  const featuredProperties = featuredPropertiesDocs.map(
    convertToSerializableObject
  );

  return featuredProperties.length > 0 ? (
    <section className='bg-blue-50 px-4 pt-6 pb-10'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
          Imóveis em Destaque
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {featuredProperties.map((property) => (
            <FeaturedPropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default FeaturedProperties;
