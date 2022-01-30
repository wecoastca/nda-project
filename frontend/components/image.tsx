import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image }) => {
  const { url, alternativeText, width, height } = image.data.attributes

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="fixed"
      width={520}
      height={632}
      sizes="20vw"
      // objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image
