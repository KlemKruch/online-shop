const { Product } = require("../models/Product");

function addProduct({ name, description, price, amount, category, image }) {
  return Product.create({ name, description, price, amount, category, image });
}

async function editProduct(id, product) {
  const newProduct = await Product.findByIdAndUpdate(id, product, {
    returnDocument: "after",
  });

  return newProduct;
}

function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}

function getProducts() {
  return Product.find();
}

function getProduct(id) {
  return Product.findById(id);
}

module.exports = {
  addProduct,
  editProduct,
  deleteProduct,
  getProducts,
  getProduct,
};
