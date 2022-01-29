import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Card = ({ cardData }) => {
  return (
    <Link href={`/works/${cardData.attributes.slug}`}>
      <a style={{ width: "26vw" }}>
        <NextImage image={cardData.attributes.image} />
      </a>
    </Link>
  )
}

export default Card
