const connectDB = require('./config/db');
const Product = require('./models/product');
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  findProductByCategory
} = require('./controllers/productController');

connectDB();

setTimeout(() => {
  createProduct();

  setTimeout(() => {
    getAllProducts();

    setTimeout(() => {
      updateProduct();

      setTimeout(() => {
        getAllProducts();
        findProductByCategory('electronics');

        setTimeout(() => {
          deleteProduct();
        }, 1000);

      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);