import { GetStaticPaths } from "next"
import Layout from "../../components/layout"

const Work = ({ categories }) => {
  return <Layout categories={categories}>PARTICULAR WORK</Layout>
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
