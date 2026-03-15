'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useGlobalContext } from '@/context/GlobalContext';
import deleteMessage from '@/app/actions/deleteMessage';
import markMessageAsRead from '@/app/actions/markMessageAsRead';

// Card de mensagem recebida no inbox do usuário
const MessageCard = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const { setUnreadCount } = useGlobalContext();

  // Alterna o status de leitura da mensagem
  const handleReadClick = async () => {
    const res = await markMessageAsRead(message._id);
    setIsRead(res.read);
    setUnreadCount((prev) => (res.read ? prev - 1 : prev + 1));
    toast.success(
      res.read ? 'Mensagem marcada como lida.' : 'Mensagem marcada como não lida.'
    );
  };

  // Exclui a mensagem do inbox
  const handleDeleteClick = async () => {
    await deleteMessage(message._id);
    setIsDeleted(true);
    setUnreadCount((prev) => (isRead ? prev : prev - 1));
    toast.success('Mensagem excluída com sucesso.');
  };

  if (isDeleted) return null;

  return (
    <div className='relative bg-white p-4 rounded-md shadow-md border border-gray-200'>
      {/* Badge de não lida */}
      {!isRead && (
        <div className='absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
          Novo
        </div>
      )}

      <h2 className='text-xl mb-4'>
        <span className='font-bold'>Imóvel: </span>{' '}
        {message.property ? (
          <a href={`/properties/${message.property._id}`} className='text-blue-500 hover:underline'>
            {message.property.name}
          </a>
        ) : (
          <span className='text-gray-500'>(Imóvel removido)</span>
        )}
      </h2>

      <p className='text-gray-700'>{message.body}</p>

      <ul className='mt-4'>
        <li>
          <strong>Nome: </strong> {message.name}
        </li>
        <li>
          <strong>Responder para: </strong>{' '}
          <a href={`mailto:${message.email}`} className='text-blue-500'>
            {message.email}
          </a>
        </li>
        {message.phone && (
          <li>
            <strong>Telefone: </strong>{' '}
            <a href={`tel:${message.phone}`} className='text-blue-500'>
              {message.phone}
            </a>
          </li>
        )}
      </ul>

      <p className='text-gray-500 text-sm mt-4'>
        Recebida em:{' '}
        {new Date(message.createdAt).toLocaleDateString('pt-BR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>

      {/* Ações da mensagem */}
      <div className='mt-4 flex space-x-3'>
        <button
          onClick={handleReadClick}
          className={`${
            isRead ? 'bg-gray-300' : 'bg-blue-500 text-white'
          } py-1 px-3 rounded-md text-sm`}
        >
          {isRead ? 'Marcar como Não Lida' : 'Marcar como Lida'}
        </button>
        <button
          onClick={handleDeleteClick}
          className='bg-red-500 text-white py-1 px-3 rounded-md text-sm'
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default MessageCard;
