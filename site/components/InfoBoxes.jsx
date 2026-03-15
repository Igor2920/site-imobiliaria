import InfoBox from './InfoBox';

// Seção com duas caixas informativas: uma para inquilinos e outra para proprietários
const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='Para Quem Busca um Imóvel'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Ver Imóveis Disponíveis',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Encontre o seu próximo imóvel. Filtre por localização, tipo e
            muito mais.
          </InfoBox>

          <InfoBox
            heading='Para Proprietários'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Anunciar Meu Imóvel',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
            Liste seu imóvel e alcance milhares de interessados. O processo é
            simples e rápido.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
