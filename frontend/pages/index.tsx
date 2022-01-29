import { GetStaticProps } from "next"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Card from "../components/card"

const Home = ({
  categories,
  homepage,
  articles,
}: {
  articles: any
  categories: any
  homepage: any
}) => {
  // TODO: Левый и правый блок вынести в отдельные компоненты

  return (
    <Layout categories={categories}>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="border-r border-yellow-500 h-full w-5/12 flex flex-col  justify-around px-8 shrink-0">
        <p className="text-5xl">
          All works are blured until we dive into the process and restrictions.
        </p>
        <div className="text-2xl">
          With hover you could pry about the final decisions but don’t have a
          clue why they was made.
        </div>
      </div>
      <div className="h-full p-10 flex gap-2 flex-auto items-center">
        {/* Замени articles, когда поменяешь структуру данных */}
        {articles?.map((x, i) => (
          <Card cardData={x} key={i} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
