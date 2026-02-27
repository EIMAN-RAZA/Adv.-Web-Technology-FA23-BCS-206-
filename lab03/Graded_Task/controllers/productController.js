const Product = require('../models/product');


const createProduct = () => {
  const product = new Product({
    name: 'Laptop',
    price: 120000,
    category: 'electronics',
    inStock: true
  });

  product.save()
    .then(data => console.log('Product Added:', data))
    .catch(err => console.log('Error:', err));
};


const getAllProducts = () => {
  Product.find()
    .then(products => console.log('All Products:', products))
    .catch(err => console.log('Error:', err));
};


const updateProduct = () => {
  Product.updateOne(
    { name: 'Laptop' },
    { $set: { price: 110000, category: 'computers' } }
  )
  .then(() => console.log('Product Updated'))
  .catch(err => console.log('Error:', err));
};


const deleteProduct = () => {
  Product.deleteOne({ name: 'Laptop' })
    .then(() => console.log('Product Deleted'))
    .catch(err => console.log('Error:', err));
};


const findProductByCategory = (categoryName) => {
  Product.find({ category: categoryName })
    .then(products =>
      console.log(`Products in category "${categoryName}":`, products)
    )
    .catch(err => console.log('Error:', err));
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  findProductByCategory
};
