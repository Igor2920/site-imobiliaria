import Link from 'next/link';
import Image from 'next/image';

// Rodapé da aplicação
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-blue-700 text-white py-4 mt-24'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4'>
        {/* Logo e copyright */}
        <div className='mb-4 md:mb-0'>
          <span className='text-lg font-bold'>[Nome da Imobiliária]</span>
          <span className='text-sm ml-2'>
            &copy; {currentYear} [Nome da Imobiliária]. Todos os direitos reservados.
          </span>
        </div>

        {/* Links do rodapé */}
        <div className='flex space-x-4'>
          <Link href='/properties' className='text-white hover:text-blue-300 text-sm'>
            Imóveis
          </Link>
          <Link href='/#' className='text-white hover:text-blue-300 text-sm'>
            Termos de Uso
          </Link>
          <Link href='/#' className='text-white hover:text-blue-300 text-sm'>
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
