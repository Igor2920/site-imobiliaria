'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { useFormState } from 'react-dom';
import addMessage from '@/app/actions/addMessage';
import SubmitMessageButton from './SubmitMessageButton';

// Formulário de contato com o anunciante do imóvel
const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();

  const [state, formAction] = useFormState(addMessage, {});
  const [wasSubmitted, setWasSubmitted] = useState(false);

  useEffect(() => {
    // Exibe notificação de sucesso ou erro após o envio do formulário
    if (state.submitted) {
      toast.success('Mensagem enviada com sucesso!');
      setWasSubmitted(true);
    }
    if (state.error) toast.error(state.error);
  }, [state]);

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-xl font-bold mb-6'>Fale com o Anunciante</h3>

      {!session ? (
        <p className='text-gray-500 text-center'>
          Você precisa estar logado para enviar uma mensagem.
        </p>
      ) : wasSubmitted ? (
        <p className='text-green-500 mb-4'>
          Sua mensagem foi enviada com sucesso!
        </p>
      ) : (
        <form action={formAction}>
          <input type='hidden' id='property' name='property' defaultValue={property._id} />
          <input type='hidden' id='recipient' name='recipient' defaultValue={property.owner} />

          {/* Nome */}
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Nome
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name='name'
              type='text'
              placeholder='Seu nome completo'
              required
            />
          </div>

          {/* E-mail */}
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              E-mail
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type='email'
              placeholder='seu@email.com.br'
              required
            />
          </div>

          {/* Telefone */}
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='phone'
            >
              Telefone / WhatsApp
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='phone'
              name='phone'
              type='text'
              placeholder='(11) 99999-9999'
            />
          </div>

          {/* Mensagem */}
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Mensagem
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
              id='message'
              name='message'
              placeholder='Escreva sua mensagem aqui...'
            ></textarea>
          </div>

          <div>
            <SubmitMessageButton />
          </div>
        </form>
      )}
    </div>
  );
};

export default PropertyContactForm;
