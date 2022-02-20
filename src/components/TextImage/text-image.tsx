import React, { ReactNode } from "react"
import {
  textImageContainer,
  textImageChildren,
  textImageChildrenReverse,
  textImageContainerReverse,
} from "./text-image.module.css"

type TextImageProps = {
  image: string
  imageAlt: string
  reverse?: boolean
  children: ReactNode
  additionalClasses: string
}

export const TextImage = ({
  image,
  imageAlt,
  reverse,
  children,
}: TextImageProps) => {
  return (
    <div className={`${reverse ? textImageContainerReverse : ""}`}>
      {reverse ? (
        <div className={`container mx-auto ${textImageContainer}`}>
          <img
            loading="lazy"
            data-testid="textImageCoverReverse"
            src={image}
            alt={imageAlt}
          />
          <div className={textImageChildrenReverse}>{children}</div>
        </div>
      ) : (
        <div className={textImageContainer}>
          <img
            loading="lazy"
            data-testid="textImageCover"
            src={image}
            alt={imageAlt}
          />
          <div className={textImageChildren}>{children}</div>
        </div>
      )}
    </div>
  )
}
