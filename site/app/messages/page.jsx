import { getSessionUser } from '@/utils/getSessionUser';
import connectDB from '@/config/database';
import Message from '@/models/Message';
import MessageCard from '@/components/MessageCard';
import { convertToSerializableObject } from '@/utils/convertToObject';

// Página de mensagens recebidas — somente acessível a usuários autenticados
const MessagesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  // Busca todas as mensagens do usuário logado, ordenadas da mais recente para a mais antiga
  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate('sender', 'username image')
    .populate('property', 'name')
    .lean();

  const unreadMessages = await Message.find({ recipient: userId, read: false })
    .sort({ createdAt: -1 })
    .populate('sender', 'username image')
    .populate('property', 'name')
    .lean();

  // Converte documentos Mongoose em objetos simples serializáveis pelo Next.js
  const messages = [
    ...unreadMessages.map((m) => convertToSerializableObject(m)),
    ...readMessages.map((m) => convertToSerializableObject(m)),
  ];

  return (
    <section className='bg-blue-50'>
      <div className='container m-auto py-24 max-w-6xl'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <h1 className='text-3xl font-bold mb-4'>Suas Mensagens</h1>

          <div className='space-y-4'>
            {messages.length === 0 ? (
              <p>Você não tem mensagens.</p>
            ) : (
              messages.map((message) => (
                <MessageCard key={message._id} message={message} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesPage;
