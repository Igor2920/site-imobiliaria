'use server';

import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

// Server Action — envia uma nova mensagem para o proprietário de um imóvel
async function addMessage(previousState, formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('Você precisa estar logado para enviar uma mensagem.');
  }

  const { userId } = sessionUser;

  const recipient = formData.get('recipient');

  // Impede o usuário de enviar mensagem para si mesmo
  if (userId === recipient) {
    return { error: 'Você não pode enviar uma mensagem para si mesmo.' };
  }

  const newMessage = new Message({
    sender: userId,
    recipient,
    property: formData.get('property'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    body: formData.get('message'),
  });

  await newMessage.save();

  return { submitted: true };
}

export default addMessage;
