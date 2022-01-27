import React from "react"
import Link from "next/link"

const Nav = ({ categories }: { categories: any }) => {
  return (
    <div className="fixed flex justify-between border-b border-yellow-500 w-full">
      <nav className="flex gap-2">
        <div className="w-16 h-16 bg-neutral-400 border-r border-yellow-500"></div>
        <ul className="flex flex-row gap-8 items-end">
          {categories.map((category) => {
            return (
              <li key={category.id} className="pb-2">
                <Link href={`/${category.attributes.slug}`}>
                  <a className="text-4xl italic capitalize">
                    {category.attributes.name}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <button className="flex items-end text-4xl italic mr-8 pb-2">
        Contacts
      </button>
    </div>
  )
}

export default Nav
