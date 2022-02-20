import React from "react"
import { Link } from "gatsby"

type PostCardProps = {
  title: string
  category: string
  path: string
  image: string
  date: string
}

export const PostCard = ({
  title,
  category,
  path,
  image,
  date,
}: PostCardProps) => {
  const d = new Date(date)
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d)
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d)

  if (category == "Aesthetics") {
  }

  if (category == "Eye Surgery") {
  }

  if (category === "Eyes") {
  }

  return (
    <Link to={path} className="col-span-12 md:col-span-4">
      <div className="">
        <img
          className="h-full col-span-12"
          loading="lazy"
          width="100%"
          src={image}
          alt="Post"
        />
      </div>

      <div className="inline text-sm text-Brand-green">
        <span className="overline">{category}</span>
      </div>
      <h2 data-testid="postcardTitle" className="mt-4 displayLG lg:displayXL">
        {title}
      </h2>
      <div className="lg:pr-12 lg:pl-6 lg:py-12 lg:col-span-5">
        <div className="py-1 text-center uppercase">{mo}</div>
        <div className="py-3 text-center">
          <span className="mt-1">{ye}</span>
        </div>
      </div>
    </Link>
  )
}
