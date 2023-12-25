import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProduct,
} from '../controllers/Product';

const productRouter = Router();

productRouter.post('/products', createProduct);
productRouter.get('/products', getProducts);
productRouter.get('/products/:uuid', getProductsById);
productRouter.delete('/products/:uuid', deleteProduct);
productRouter.patch('/products/:uuid', updateProduct);

export default productRouter;
