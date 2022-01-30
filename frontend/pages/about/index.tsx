import { GetStaticProps } from "next"
import React from "react"
import Layout from "../../components/layout"
import { fetchAPI } from "../../lib/api"

const About = ({
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
      <div className="border-r border-yellow-500 h-full w-5/12 flex flex-col px-8 shrink-0 py-28">
        <p className="text-5xl pb-24">Process</p>
        <p style={{ fontSize: "32px", lineHeight: "48px" }}>
          All works were redrawn in low fidelity style and then blured. Color
          block are only reminder about the work.
        </p>
      </div>
      <div className="h-full px-8 flex flex-col py-28 w-5/12">
        <p className="text-5xl pb-24">Team</p>
        <p style={{ fontSize: "32px", lineHeight: "48px" }}>
          All works were redrawn in low fidelity style and then blured. Color
          block are only reminder about the work.
        </p>
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

export default About
