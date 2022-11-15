import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (request, response) => {
  response.send('OK');
});

// Create product
router.post('/products', (request, response) => {
  response.send('OK');
});

// Get products by category
router.get('/categories/:categoryId/products', (request, response) => {
  response.send('OK');
});

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
