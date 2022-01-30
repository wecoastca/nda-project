import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ cardData }) => {
  return (
    <Link href={`/works/1`}>
      <a className="opacity-20 hover:opacity-100" style={{ width: "32vw" }}>
        <NextImage image={cardData.attributes.image} />
      </a>
    </Link>
  )
}

export default Card
