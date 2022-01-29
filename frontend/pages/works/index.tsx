import { GetStaticProps } from "next"
import Layout from "../../components/layout"
import { fetchAPI } from "../../lib/api"

const Works = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="border-r border-yellow-500 h-full w-5/12 flex flex-col justify-around px-8 shrink-0">
        <p className="text-5xl">
          All works are blured until we dive into the process and restrictions.
        </p>
        <div className="text-2xl">
          With hover you could pry about the final decisions but don’t have a
          clue why they was made.
        </div>
      </div>
      <div className="h-full p-10 flex gap-2 flex-auto items-center"></div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const [categoriesRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
  ])

  return {
    props: {
      categories: categoriesRes.data,
    },
  }
}

export default Works
