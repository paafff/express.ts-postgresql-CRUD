import { Router } from 'express';
import { createProduct } from '../controllers/Product';

const productRouter = Router();

productRouter.post('/products', createProduct);

export default productRouter;
