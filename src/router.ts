import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProducts } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(request, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProducts);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', (request, response) => {
  response.send('OK');
});

// Create order
router.post('/orders', (request, response) => {
  response.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (request, response) => {
  response.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (request, response) => {
  response.send('OK');
});
