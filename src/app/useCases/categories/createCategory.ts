import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(request: Request, response: Response) {
  const { icon, name } = request.body;

  const category = await Category.create({
    icon,
    name,
  });

  return response.json(category);
}
