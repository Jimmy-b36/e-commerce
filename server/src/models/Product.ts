const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    alt: { type: String, required: true },
    category: { type: Array, required: true },
    popular: { type: Boolean, default: false },
  },
  { timeStamps: true }
);

module.exports = mongoose.model('Product', productSchema);
