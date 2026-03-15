import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import PropertyEditForm from '@/components/PropertyEditForm';
import { notFound } from 'next/navigation';

// Página de edição de imóvel — somente o proprietário pode acessar
const EditPropertyPage = async ({ params: { id } }) => {
  await connectDB();

  const propertyDoc = await Property.findById(id).lean();

  if (!propertyDoc) return notFound();

  const property = convertToSerializableObject(propertyDoc);

  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <PropertyEditForm property={property} />
        </div>
      </div>
    </section>
  );
};

export default EditPropertyPage;
