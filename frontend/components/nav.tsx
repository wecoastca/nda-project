import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Nav = ({ categories }: { categories: any }) => {
  const router = useRouter()
  return (
    <div className="fixed flex justify-between border-b border-yellow-500 w-full bg-white z-10">
      <nav className="flex gap-2">
        <Link href="/">
          <a>
            <div className="w-20 h-20 bg-neutral-400 border-r border-yellow-500"></div>
          </a>
        </Link>
        <ul className="flex flex-row gap-8 items-center">
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/${category.attributes.slug}`}>
                  <a
                    className={`text-5xl italic capitalize hover:opacity-20 ${
                      router?.asPath === `/${category.attributes.slug}`
                        ? "line-through"
                        : null
                    }`}
                  >
                    {category.attributes.name}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <button className="block mr-8 hover:opacity-20">
        <span className="text-5xl italic ">Contact</span>
      </button>
    </div>
  )
}

export default Nav
