'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';
import addProperty from '@/app/actions/addProperty';

// Formulário completo de cadastro de novo imóvel
const PropertyAddForm = () => {
  const [fields, setFields] = useState({
    type: 'Apartamento',
    name: '',
    description: '',
    location: { street: '', city: '', state: '', zipcode: '' },
    beds: '',
    baths: '',
    square_feet: '',
    amenities: [],
    rates: { weekly: '', monthly: '', nightly: '' },
    seller_info: { name: '', email: '', phone: '' },
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [outer, inner] = name.split('.');
      setFields((prev) => ({
        ...prev,
        [outer]: { ...prev[outer], [inner]: value },
      }));
    } else {
      setFields((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    setFields((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, value]
        : prev.amenities.filter((a) => a !== value),
    }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages((prev) => [...prev, ...selectedFiles]);
  };

  // Lista de comodidades disponíveis para seleção
  const amenitiesList = [
    { value: 'Wifi', label: 'Wi-Fi' },
    { value: 'Full kitchen', label: 'Cozinha Completa' },
    { value: 'Washer & Dryer', label: 'Lavanderia' },
    { value: 'Free Parking', label: 'Estacionamento Gratuito' },
    { value: 'Hot Tub', label: 'Hidromassagem' },
    { value: '24/7 Security', label: 'Segurança 24h' },
    { value: 'Wheelchair Accessible', label: 'Acessível para Cadeirantes' },
    { value: 'Elevator Access', label: 'Acesso por Elevador' },
    { value: 'Dishwasher', label: 'Lava-louças' },
    { value: 'Gym/Fitness Center', label: 'Academia' },
    { value: 'Air Conditioning', label: 'Ar-condicionado' },
    { value: 'Balcony/Patio', label: 'Varanda/Pátio' },
    { value: 'Smart TV', label: 'Smart TV' },
    { value: 'Coffee Maker', label: 'Cafeteira' },
    { value: 'Swimming Pool', label: 'Piscina' },
    { value: 'High-Speed Internet', label: 'Internet de Alta Velocidade' },
    { value: 'Outdoor Grill/BBQ', label: 'Churrasqueira' },
    { value: 'Fireplace', label: 'Lareira' },
    { value: 'Beach Access', label: 'Acesso à Praia' },
    { value: 'Hiking Trails Access', label: 'Trilhas Ecológicas' },
    { value: 'Pet-Friendly', label: 'Aceita Animais de Estimação' },
    { value: 'Mountain View', label: 'Vista para a Montanha' },
  ];

  return (
    <>
      <h2 className='text-3xl text-center font-semibold mb-6'>
        Anunciar Imóvel
      </h2>

      <form action={addProperty}>
        {/* Tipo de Imóvel */}
        <div className='mb-4'>
          <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
            Tipo de Imóvel
          </label>
          <select
            id='type'
            name='type'
            className='border rounded w-full py-2 px-3'
            value={fields.type}
            onChange={handleChange}
            required
          >
            <option value='Apartamento'>Apartamento</option>
            <option value='Studio'>Studio</option>
            <option value='Condomínio'>Condomínio</option>
            <option value='Casa'>Casa</option>
            <option value='Chalé ou Cabana'>Chalé ou Cabana</option>
            <option value='Loft'>Loft</option>
            <option value='Quarto'>Quarto</option>
            <option value='Outro'>Outro</option>
          </select>
        </div>

        {/* Nome do imóvel */}
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Título do Anúncio
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Ex: Apartamento 2 quartos próximo ao metrô'
            value={fields.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Descrição */}
        <div className='mb-4'>
          <label
            htmlFor='description'
            className='block text-gray-700 font-bold mb-2'
          >
            Descrição
          </label>
          <textarea
            id='description'
            name='description'
            className='border rounded w-full py-2 px-3'
            rows='4'
            placeholder='Descreva o imóvel com detalhes relevantes para os interessados'
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Localização */}
        <div className='mb-4 bg-blue-50 p-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Localização
          </label>
          <input
            type='text'
            id='street'
            name='location.street'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Rua / Avenida e número'
            value={fields.location.street}
            onChange={handleChange}
          />
          <input
            type='text'
            id='city'
            name='location.city'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Cidade'
            value={fields.location.city}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            id='state'
            name='location.state'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Estado (UF)'
            value={fields.location.state}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            id='zipcode'
            name='location.zipcode'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='CEP (00000-000)'
            value={fields.location.zipcode}
            onChange={handleChange}
          />
        </div>

        {/* Quartos, Banheiros, Área */}
        <div className='mb-4 flex flex-wrap gap-4'>
          <div>
            <label htmlFor='beds' className='block text-gray-700 font-bold mb-2'>
              Quartos
            </label>
            <input
              type='number'
              id='beds'
              name='beds'
              className='border rounded w-full py-2 px-3'
              value={fields.beds}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='baths' className='block text-gray-700 font-bold mb-2'>
              Banheiros
            </label>
            <input
              type='number'
              id='baths'
              name='baths'
              className='border rounded w-full py-2 px-3'
              value={fields.baths}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor='square_feet'
              className='block text-gray-700 font-bold mb-2'
            >
              Área (m²)
            </label>
            <input
              type='number'
              id='square_feet'
              name='square_feet'
              className='border rounded w-full py-2 px-3'
              value={fields.square_feet}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Comodidades */}
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Comodidades
          </label>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
            {amenitiesList.map(({ value, label }) => (
              <div key={value}>
                <input
                  type='checkbox'
                  id={`amenity_${value}`}
                  name='amenities'
                  value={value}
                  className='mr-2'
                  checked={fields.amenities.includes(value)}
                  onChange={handleAmenitiesChange}
                />
                <label htmlFor={`amenity_${value}`}>{label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className='mb-4 bg-blue-50 p-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Valores (R$) — preencha apenas os que se aplicam
          </label>
          <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4'>
            <div className='flex items-center'>
              <label htmlFor='weekly_rate' className='mr-2'>
                Semanal
              </label>
              <input
                type='number'
                id='weekly_rate'
                name='rates.weekly'
                className='border rounded w-full py-2 px-3'
                value={fields.rates.weekly}
                onChange={handleChange}
              />
            </div>
            <div className='flex items-center'>
              <label htmlFor='monthly_rate' className='mr-2'>
                Mensal
              </label>
              <input
                type='number'
                id='monthly_rate'
                name='rates.monthly'
                className='border rounded w-full py-2 px-3'
                value={fields.rates.monthly}
                onChange={handleChange}
              />
            </div>
            <div className='flex items-center'>
              <label htmlFor='nightly_rate' className='mr-2'>
                Diária
              </label>
              <input
                type='number'
                id='nightly_rate'
                name='rates.nightly'
                className='border rounded w-full py-2 px-3'
                value={fields.rates.nightly}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Informações do Anunciante */}
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Informações do Anunciante
          </label>
          <input
            type='text'
            id='seller_name'
            name='seller_info.name'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Nome do responsável pelo imóvel'
            value={fields.seller_info.name}
            onChange={handleChange}
          />
          <input
            type='email'
            id='seller_email'
            name='seller_info.email'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='contato@email.com.br'
            value={fields.seller_info.email}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            id='seller_phone'
            name='seller_info.phone'
            className='border rounded w-full py-2 px-3'
            placeholder='(11) 99999-9999'
            value={fields.seller_info.phone}
            onChange={handleChange}
          />
        </div>

        {/* Upload de imagens */}
        <div className='mb-4'>
          <label htmlFor='images' className='block text-gray-700 font-bold mb-2'>
            Fotos do Imóvel (máximo 4)
          </label>
          <input
            type='file'
            id='images'
            name='images'
            className='border rounded w-full py-2 px-3'
            accept='image/*'
            multiple
            onChange={handleImageChange}
            required
          />
        </div>

        <div>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Publicar Anúncio
          </button>
        </div>
      </form>
    </>
  );
};

export default PropertyAddForm;
