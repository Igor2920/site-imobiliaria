'use client';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

// Componente de botões de compartilhamento nas redes sociais
const ShareButtons = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;

  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        Compartilhar este Imóvel:
      </h3>
      <div className='flex gap-3 justify-center pb-5'>
        {/* Compartilhar no Facebook */}
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, '')}ParaAlugar`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        {/* Compartilhar no Twitter/X */}
        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtags={[`${property.type.replace(/\s/g, '')}ParaAlugar`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        {/* Compartilhar no WhatsApp */}
        <WhatsappShareButton
          url={shareUrl}
          title={property.name}
          separator=':: '
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        {/* Compartilhar por E-mail */}
        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Confira este imóvel: ${shareUrl}`}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
