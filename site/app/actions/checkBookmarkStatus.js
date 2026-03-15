'use server';

import connectDB from '@/config/database';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';

// Server Action — verifica se um imóvel específico está nos favoritos do usuário
async function checkBookmarkStatus(propertyId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('Você precisa estar logado para verificar os favoritos.');
  }

  const { userId } = sessionUser;

  const user = await User.findById(userId);

  const isBookmarked = user.bookmarks.includes(propertyId);

  return { isBookmarked };
}

export default checkBookmarkStatus;
