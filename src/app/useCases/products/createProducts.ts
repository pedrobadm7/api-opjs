import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProducts(request: Request, response: Response) {
  try {
    console.log(request.body);
  } catch {
    response.sendStatus(500);
  }
}
