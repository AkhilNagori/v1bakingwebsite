import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Recipe from '../../../models/Recipe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      const { q } = req.query;
      let query = {};
      if (q) {
        const regex = new RegExp(`${q}`, 'i');
        Object.assign(query, {
          $or: [
            { id: { $regex: regex } },
            { title: { $regex: regex } },
            { author: { $regex: regex } },
            { description: { $regex: regex } },
            { tags: { $regex: regex } },
            { difficulty: { $regex: regex } },
            { 'ingredients.name': { $regex: regex } },
            { content: { $regex: regex } },
          ],
        });
      }
      try {
        const recipes = await Recipe.find(query).sort({ date: -1 });
        res.status(200).json({ status: 'success', data: recipes });
      } catch (e) {
        console.error(e);
        res.status(404).json({ status: 'error', message: 'Rezeptsuche konnte nicht ausgeführt werden.' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).send(`Method ${method} is not allowed.`);
      break;
  }
}
