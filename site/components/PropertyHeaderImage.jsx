import Image from 'next/image';

// Imagem de cabeçalho da página de detalhes do imóvel
const PropertyHeaderImage = ({ image }) => {
  return (
    <section>
      <div className='container-xl m-auto'>
        <div className='grid grid-cols-1'>
          <Image
            src={image}
            alt='Foto principal do imóvel'
            className='object-cover h-[400px] w-full'
            width={0}
            height={0}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
