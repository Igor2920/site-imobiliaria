// Converte um documento Mongoose (com campos como _id do tipo ObjectId)
// em um objeto JavaScript simples e serializável pelo Next.js
export function convertToSerializableObject(leanDocument) {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key] instanceof Object && leanDocument[key]._bsontype === 'ObjectId') {
      leanDocument[key] = leanDocument[key].toString();
    } else if (leanDocument[key] instanceof Date) {
      leanDocument[key] = leanDocument[key].toISOString();
    } else if (Array.isArray(leanDocument[key])) {
      leanDocument[key] = leanDocument[key].map((item) =>
        typeof item === 'object' && item !== null
          ? convertToSerializableObject(item)
          : item
      );
    } else if (typeof leanDocument[key] === 'object' && leanDocument[key] !== null) {
      leanDocument[key] = convertToSerializableObject(leanDocument[key]);
    }
  }
  return leanDocument;
}
