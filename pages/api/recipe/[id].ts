import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/dbConnect';
import Recipe from '../../../models/Recipe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      if (id) {
        try {
          const recipe = await Recipe.findOne({ id });
          if (!recipe) {
            res.status(400).json({ status: 'fail', data: null, message: `Rezept ${id} konnte nicht gefunden werden.` });
          } else {
            res.status(200).json({ status: 'success', data: recipe });
          }
        } catch (e) {
          console.error(e);
          res.status(404).json({ status: 'error', message: `Rezept ${id} konnte nicht geladen werden.` });
        }
      } else {
        res.status(404).json({ status: 'error', message: `Bitte gebe eine Rezept-ID an.` });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).send(`Method ${method} is not allowed.`);
      break;
  }
}
