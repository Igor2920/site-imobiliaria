'use server';

import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import cloudinary from '@/config/cloudinary';

// Server Action — cadastra um novo imóvel com upload de imagens no Cloudinary
async function addProperty(formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('Você precisa estar logado para cadastrar um imóvel.');
  }

  const { userId } = sessionUser;

  // Coleta os campos de amenidades e imagens (múltiplos valores)
  const amenities = formData.getAll('amenities');
  const images = formData
    .getAll('images')
    .filter((image) => image.name !== '');

  // Monta o objeto de dados do imóvel a partir do formulário
  const propertyData = {
    owner: userId,
    type: formData.get('type'),
    name: formData.get('name'),
    description: formData.get('description'),
    location: {
      street: formData.get('location.street'),
      city: formData.get('location.city'),
      state: formData.get('location.state'),
      zipcode: formData.get('location.zipcode'),
    },
    beds: formData.get('beds'),
    baths: formData.get('baths'),
    square_feet: formData.get('square_feet'),
    amenities,
    rates: {
      weekly: formData.get('rates.weekly'),
      monthly: formData.get('rates.monthly'),
      nightly: formData.get('rates.nightly'),
    },
    seller_info: {
      name: formData.get('seller_info.name'),
      email: formData.get('seller_info.email'),
      phone: formData.get('seller_info.phone'),
    },
  };

  // Faz upload de cada imagem no Cloudinary e armazena as URLs retornadas
  const imageUploadPromises = [];

  for (const image of images) {
    const imageBuffer = await image.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);
    const imageBase64 = imageData.toString('base64');

    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      { folder: 'imobiliaria' }
    );

    imageUploadPromises.push(result.secure_url);
  }

  const uploadedImages = await Promise.all(imageUploadPromises);
  propertyData.images = uploadedImages;

  const newProperty = new Property(propertyData);
  await newProperty.save();

  // Revalida o cache das páginas relacionadas e redireciona para o novo imóvel
  revalidatePath('/', 'layout');

  redirect(`/properties/${newProperty._id}`);
}

export default addProperty;
