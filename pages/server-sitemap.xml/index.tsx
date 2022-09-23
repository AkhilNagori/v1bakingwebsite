import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { Recipe } from '../../interfaces/recipe.interface';
import { IResponse } from '../../interfaces/response.interface';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.API_BASEURL}recipe`);
  const data: IResponse = await res.json();

  const fields: ISitemapField[] = data.data.map((recipe: Recipe) => ({
    loc: `https://nilskathi.de/rezept/${recipe.id}`,
    lastmod: new Date(recipe.date).toISOString(),
  }));

  return getServerSideSitemap(context, fields);
};
export default function Sitemap() {}
