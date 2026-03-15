'use server';

import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

// Server Action — exclui uma mensagem do inbox do usuário
async function deleteMessage(messageId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('Você precisa estar logado para excluir mensagens.');
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) throw new Error('Mensagem não encontrada.');

  // Garante que somente o destinatário pode excluir a mensagem
  if (message.recipient.toString() !== userId) {
    throw new Error('Você não tem permissão para excluir esta mensagem.');
  }

  await message.deleteOne();

  revalidatePath('/messages', 'page');
}

export default deleteMessage;
