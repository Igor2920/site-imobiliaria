'use server';

import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

// Server Action — adiciona ou remove um imóvel dos favoritos do usuário
async function bookmarkProperty(propertyId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('Você precisa estar logado para salvar imóveis.');
  }

  const { userId } = sessionUser;

  const user = await User.findById(userId);

  // Verifica se o imóvel já está na lista de favoritos
  let isBookmarked = user.bookmarks.includes(propertyId);

  let message;

  if (isBookmarked) {
    // Remove dos favoritos caso já esteja salvo
    user.bookmarks.pull(propertyId);
    message = 'Imóvel removido dos favoritos.';
    isBookmarked = false;
  } else {
    // Adiciona aos favoritos
    user.bookmarks.push(propertyId);
    message = 'Imóvel adicionado aos favoritos!';
    isBookmarked = true;
  }

  await user.save();
  revalidatePath('/properties/saved', 'page');

  return { message, isBookmarked };
}

export default bookmarkProperty;
