import React from "react"
import { Link } from "gatsby"

type ProductCardIconProps = {
  title: string
  path: string
  excerpt: string
  image: string
}

export const ProductCardIcon = ({
  title,
  path,
  excerpt,
  image,
}: ProductCardIconProps) => {
  return (
    <div className="relative flex flex-col px-8 py-12 bg-white border border-black border-solid shadow-sm">
      <img loading="lazy" className="self-start h-12" src={image} alt="Lips" />
      <h2
        data-testid="productCardIconTitle"
        className="mt-8 mb-2 text-3xl tracking-wide lg:text-2xl"
      >
        {title}
      </h2>
      <p className="flex-grow">{excerpt}</p>
      <Link className="absolute top-0 bottom-0 left-0 right-0" to={path}>
        <span className="sr-only">{title}</span>
      </Link>
    </div>
  )
}
