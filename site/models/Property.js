import { Schema, model, models } from 'mongoose';

// Schema do imóvel — estrutura completa de um anúncio imobiliário
const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'O nome do imóvel é obrigatório.'],
    },
    type: {
      type: String,
      required: [true, 'O tipo do imóvel é obrigatório.'],
      enum: [
        'Apartamento',
        'Studio',
        'Condomínio',
        'Casa',
        'Chalé ou Cabana',
        'Loft',
        'Quarto',
        'Outro',
      ],
    },
    description: {
      type: String,
    },
    location: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zipcode: { type: String },
    },
    beds: {
      type: Number,
      required: [true, 'O número de quartos é obrigatório.'],
    },
    baths: {
      type: Number,
      required: [true, 'O número de banheiros é obrigatório.'],
    },
    square_feet: {
      type: Number,
    },
    amenities: [{ type: String }],
    rates: {
      nightly: { type: Number },
      weekly: { type: Number },
      monthly: { type: Number },
    },
    seller_info: {
      name: { type: String },
      email: { type: String },
      phone: { type: String },
    },
    images: [{ type: String }],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model('Property', PropertySchema);

export default Property;
