import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTimes,
  FaCheck,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from 'react-icons/fa';

// Lista de amenidades com suporte a português
const amenidadesMap = {
  'Wifi': 'Wi-Fi',
  'Full kitchen': 'Cozinha Completa',
  'Washer & Dryer': 'Lavanderia',
  'Free Parking': 'Estacionamento Gratuito',
  'Hot Tub': 'Hidromassagem',
  '24/7 Security': 'Segurança 24h',
  'Wheelchair Accessible': 'Acessível para Cadeirantes',
  'Elevator Access': 'Acesso por Elevador',
  'Dishwasher': 'Lava-louças',
  'Gym/Fitness Center': 'Academia',
  'Air Conditioning': 'Ar-condicionado',
  'Balcony/Patio': 'Varanda/Pátio',
  'Smart TV': 'Smart TV',
  'Coffee Maker': 'Cafeteira',
  'Swimming Pool': 'Piscina',
  'High-Speed Internet': 'Internet de Alta Velocidade',
  'Outdoor Grill/BBQ': 'Churrasqueira',
  'Fireplace': 'Lareira',
  'Beach Access': 'Acesso à Praia',
  'Hiking Trails Access': 'Trilhas Ecológicas',
  'Pet-Friendly': 'Aceita Animais de Estimação',
  'Mountain View': 'Vista para a Montanha',
};

// Componente de detalhes completos de um imóvel
const PropertyDetails = ({ property }) => {
  return (
    <main>
      {/* Tipo e nome */}
      <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
        <div className='text-gray-500 mb-4'>{property.type}</div>
        <h1 className='text-3xl font-bold mb-4'>{property.name}</h1>

        {/* Endereço */}
        <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
          <FaMapMarkerAlt className='text-orange-700 mr-2 mt-1' />
          <p className='text-orange-700'>
            {property.location.street}, {property.location.city} -{' '}
            {property.location.state}, CEP {property.location.zipcode}
          </p>
        </div>

        {/* Taxas de aluguel */}
        <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
          Valores e Disponibilidade
        </h3>
        <div className='flex flex-col md:flex-row justify-around'>
          {property.rates.nightly && (
            <div className='flex items-center justify-center md:justify-start font-bold text-2xl'>
              <FaMoneyBillWave className='text-green-700 mr-2' />
              <div>
                <span className='font-bold'>Diária: </span>
                R$ {property.rates.nightly.toLocaleString('pt-BR')}
                <span className='text-gray-600 text-base'>/noite</span>
              </div>
            </div>
          )}
          {property.rates.weekly && (
            <div className='flex items-center justify-center md:justify-start font-bold text-2xl'>
              <FaMoneyBillWave className='text-green-700 mr-2' />
              <div>
                <span className='font-bold'>Semanal: </span>
                R$ {property.rates.weekly.toLocaleString('pt-BR')}
                <span className='text-gray-600 text-base'>/semana</span>
              </div>
            </div>
          )}
          {property.rates.monthly && (
            <div className='flex items-center justify-center md:justify-start font-bold text-2xl'>
              <FaMoneyBillWave className='text-green-700 mr-2' />
              <div>
                <span className='font-bold'>Mensal: </span>
                R$ {property.rates.monthly.toLocaleString('pt-BR')}
                <span className='text-gray-600 text-base'>/mês</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Descrição */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6 bg-gray-800 text-white p-2'>
          Descrição e Detalhes
        </h3>
        <div className='flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9'>
          <p>
            <FaBed className='inline-block mr-2' /> {property.beds}{' '}
            <span className='hidden sm:inline'>Quartos</span>
          </p>
          <p>
            <FaBath className='inline-block mr-2' /> {property.baths}{' '}
            <span className='hidden sm:inline'>Banheiros</span>
          </p>
          <p>
            <FaRulerCombined className='inline-block mr-2' />{' '}
            {property.square_feet}{' '}
            <span className='hidden sm:inline'>m²</span>
          </p>
        </div>
        <p className='text-gray-500 mb-4'>{property.description}</p>
      </div>

      {/* Amenidades */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6 bg-gray-800 text-white p-2'>
          Comodidades
        </h3>
        <ul className='grid grid-cols-1 md:grid-cols-2 list-none space-y-2'>
          {[
            'Wifi', 'Full kitchen', 'Washer & Dryer', 'Free Parking',
            'Hot Tub', '24/7 Security', 'Wheelchair Accessible',
            'Elevator Access', 'Dishwasher', 'Gym/Fitness Center',
            'Air Conditioning', 'Balcony/Patio', 'Smart TV', 'Coffee Maker',
            'Swimming Pool', 'High-Speed Internet', 'Outdoor Grill/BBQ',
            'Fireplace', 'Beach Access', 'Hiking Trails Access',
            'Pet-Friendly', 'Mountain View',
          ].map((amenity) => (
            <li key={amenity}>
              {property.amenities.includes(amenity) ? (
                <FaCheck className='inline-block text-green-600 mr-2' />
              ) : (
                <FaTimes className='inline-block text-red-600 mr-2' />
              )}
              {amenidadesMap[amenity] || amenity}
            </li>
          ))}
        </ul>
      </div>

      {/* Informações do anunciante */}
      <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6 bg-gray-800 text-white p-2'>
          Informações do Anunciante
        </h3>
        <div className='flex flex-col md:flex-row justify-between'>
          <p className='text-gray-700 mb-2'>
            <strong>Nome:</strong> {property.seller_info.name}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>Telefone:</strong> {property.seller_info.phone}
          </p>
          <p className='text-gray-700 mb-2'>
            <strong>E-mail:</strong> {property.seller_info.email}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetails;
