import { GetStaticProps } from "next"
import Layout from "../../components/layout"
import { fetchAPI } from "../../lib/api"
import Link from "next/link"
import { useState } from "react"

type WorkType = {
  typeName: "all" | "curation" | "design" | "research"
  color: "bg-pink-400" | "red" | "bg-green-300"
}

type Work = {
  type: WorkType
  name: string
  url: string
}
const WORK_TYPES: WorkType[] = [
  { typeName: "all", color: "red" },
  { typeName: "curation", color: "red" },
  { typeName: "design", color: "red" },
  { typeName: "research", color: "bg-pink-400" },
]
const WORKS: Work[] = [
  {
    type: { typeName: "research", color: "bg-pink-400" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "research", color: "bg-pink-400" },
    name: "Moderated non-laboratory usability testing of the ATMs →",
    url: "/works/2",
  },
  {
    type: { typeName: "research", color: "bg-pink-400" },
    name: "Moderated non-laboratory usability testing of the ATMs →",
    url: "/works/3",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
  {
    type: { typeName: "design", color: "bg-green-300" },
    name: "Moderated usability testing with eye-tracker →",
    url: "/works/1",
  },
]

const Works = ({ categories }) => {
  const [workCategory, setWorkCategory] = useState<string>("all")

  return (
    <Layout categories={categories}>
      <div className="border-r border-yellow-500 h-full w-5/12 flex flex-col px-8 shrink-0 py-28">
        <ul className="text-5xl">
          {WORK_TYPES?.map((type) => (
            <li key={type.typeName}>
              <button
                value={type.typeName}
                onClick={(e) => setWorkCategory(e?.currentTarget?.value)}
                className={`hover:opacity-20 visited:line-through ${
                  workCategory === type.typeName ? "line-through" : null
                }`}
              >
                {type.typeName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="h-full grid grid-rows-2 grid-flow-col overflow-scroll"
        style={{
          gridAutoColumns: "33%",
        }}
      >
        {WORKS.map((work, i) => (
          <div
            key={work?.name}
            className={`border-yellow-500 border-r px-8 py-12 flex flex-col gap-8 relative ${
              i % 2 === 0 ? "border-b" : ""
            }`}
          >
            <div
              className={`${work?.type?.color} blur-xl h-6 w-24 absolute`}
            ></div>
            <span className="text-2xl z-10">{work?.type?.typeName}</span>
            <Link href={work?.url}>
              <a className="hover:opacity-20">
                <p style={{ fontSize: "32px", lineHeight: "48px" }}>
                  {work?.name}
                </p>
              </a>
            </Link>
          </div>
        ))}
      </div>
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
