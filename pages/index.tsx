import RecipesList from '../components/RecipesList';
import AboutUs from '../components/AboutUs';
import { IResponse } from '../interfaces/response.interface';
import HeadSEO from '../components/HeadSEO';

export default function Home({ data }: { data: IResponse }) {
  return (
    <>
      <HeadSEO />
      <RecipesList data={data} />
      <AboutUs />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_BASEURL}recipe`);
  const data: IResponse = await res.json();
  return { props: { data } };
}
