import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/convertToObject';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyImages from '@/components/PropertyImages';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyMap from '@/components/PropertyMap';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { notFound } from 'next/navigation';

// Página de detalhes de um imóvel específico
const PropertyPage = async ({ params: { id } }) => {
  await connectDB();

  const propertyDoc = await Property.findById(id).lean();

  // Retorna 404 caso o imóvel não seja encontrado
  if (!propertyDoc) return notFound();

  const property = convertToSerializableObject(propertyDoc);

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />

      {/* Botão voltar */}
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            href='/properties'
            className='text-blue-500 hover:text-blue-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Voltar para os Imóveis
          </Link>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className='bg-blue-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            {/* Coluna principal — detalhes do imóvel */}
            <main>
              <PropertyDetails property={property} />
              <PropertyMap property={property} />
            </main>

            {/* Barra lateral — ações do imóvel */}
            <aside className='space-y-4'>
              <BookmarkButton property={property} />
              <ShareButtons property={property} />
              <PropertyContactForm property={property} />
            </aside>
          </div>
        </div>
      </section>

      {/* Galeria de imagens */}
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
