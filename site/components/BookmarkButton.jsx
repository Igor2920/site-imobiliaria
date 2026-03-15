'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from 'react-icons/fa';
import bookmarkProperty from '@/app/actions/bookmarkProperty';
import checkBookmarkStatus from '@/app/actions/checkBookmarkStatus';

// Botão de salvar/remover imóvel dos favoritos
const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se o imóvel já está salvo nos favoritos do usuário logado
    if (!userId) {
      setLoading(false);
      return;
    }

    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
      setLoading(false);
    });
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error('Você precisa estar logado para salvar imóveis.');
      return;
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);
      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
  };

  if (loading) return <p className='text-center'>Carregando...</p>;

  return isBookmarked ? (
    <button
      onClick={handleClick}
      className='bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
    >
      <FaBookmark className='mr-2' /> Remover dos Favoritos
    </button>
  ) : (
    <button
      onClick={handleClick}
      className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
    >
      <FaBookmark className='mr-2' /> Salvar Imóvel
    </button>
  );
};

export default BookmarkButton;
