'use server';

import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

// Server Action — alterna o status de leitura de uma mensagem (lida/não lida)
async function markMessageAsRead(messageId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('Você precisa estar logado para gerenciar mensagens.');
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) throw new Error('Mensagem não encontrada.');

  // Somente o destinatário pode marcar a mensagem
  if (message.recipient.toString() !== userId) {
    throw new Error('Você não tem permissão para alterar esta mensagem.');
  }

  // Alterna entre lida e não lida
  message.read = !message.read;

  await message.save();

  revalidatePath('/messages', 'page');

  return { read: message.read };
}

export default markMessageAsRead;
