const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timeStamps: true }
);

module.exports = mongoose.new('Cart', cartSchema);
