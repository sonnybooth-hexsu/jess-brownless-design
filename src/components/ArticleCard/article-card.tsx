import React from "react"
import buttons from "../../styles/buttons.module.css"

type ArticleCardProps = {
  title: string
  dateText: string
  logo: string
  excerpt: string
  article: string
  image: string
}

export const ArticleCard = ({
  title,
  dateText,
  excerpt,
  article,
  image,
}: ArticleCardProps) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 mb-6 lg:col-span-5 lg:col-start-8">
        <img
          className="w-full"
          data-testid="articleItemImage"
          width="360"
          height="240"
          src={image}
          alt="Article advert"
        ></img>
      </div>
      <div className="col-span-12 lg:row-start-1 lg:col-start-1 lg:col-span-6">
        <div className="flex items-center">
          <p className="uppercase overline text-secondaryBrand-9 mb-1">
            {dateText}
          </p>
        </div>
        <h2 className="displayLG">{title}</h2>
        <p className="mt-2 text-gray-500">{excerpt}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-8 ${buttons.btnOutlineDarkSmall}`}
          href={article}
        >
          Read more
        </a>
      </div>
    </div>
  )
}
