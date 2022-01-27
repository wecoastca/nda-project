import { GetStaticPaths } from "next"
import Layout from "../../components/layout"

const Works = ({ categories }) => {
  return <Layout categories={categories}>Works</Layout>
}

// TODO: Измени на то, что будет приходить с бека список работ.
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false,
  }
}
