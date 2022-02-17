import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../../components/layout';
import { fetchAPI } from '../../lib/api';

const About = ({
  categories,
  homepage,
  articles,
}: {
  articles: any;
  categories: any;
  homepage: any;
}) => {
  // TODO: Левый и правый блок вынести в отдельные компоненты

  return (
    <Layout categories={categories}>
      <div className="w-screen border-yellow-500 border-b pt-4 px-4 pb-10 md:py-16 lg:py-20 lg:px-6 lg:border-r lg:border-b-0 lg:w-[42vw] 2xl:py-28 2xl:px-8">
        <p className="text-lg mb-10 md:mb-8 lg:mb-24 md:text-xl xl:text-2xl">
          Process
        </p>
        <p className="text-xs md:text-lg">
          All works were redrawn in low fidelity style and then blured. Color
          block are only reminder about the work.
        </p>
      </div>
      <div className="w-screen h-full lg:w-[54vw] pt-4 px-4 pb-10 md:py-16 lg:py-20 2xl:py-28 2xl:px-8">
        <p className="text-lg mb-10 md:mb-8 lg:mb-24 md:text-xl xl:text-2xl">
          Team
        </p>
        <p className="text-xs md:text-lg">
          All works were redrawn in low fidelity style and then blured. Color
          block are only reminder about the work.
        </p>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI('/articles', { populate: '*' }),
    fetchAPI('/categories', { populate: '*' }),
    fetchAPI('/homepage', {
      populate: {
        hero: '*',
        seo: { populate: '*' },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
};

export default About;
