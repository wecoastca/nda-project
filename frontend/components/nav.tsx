import React from "react"
import Link from "next/link"

const Nav = ({ categories }: { categories: any }) => {
  return (
    <div className="fixed flex justify-between border-b border-yellow-500 w-full bg-white z-10">
      <nav className="flex gap-2">
        <div className="w-20 h-20 bg-neutral-400 border-r border-yellow-500"></div>
        <ul className="flex flex-row gap-8 items-center">
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/${category.attributes.slug}`}>
                  <a className="text-5xl italic capitalize">
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
