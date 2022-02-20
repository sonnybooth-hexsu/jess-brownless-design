import React, { ReactNode } from "react"
import { ArrowRight, ArrowLeft } from "react-feather"
import Slider from "react-slick"
import "./slick-overrides.module.css"

type ArrowProps = {
  className?: string
  style?: object
  onClick?: () => void
}

type CarouselProps = {
  settingsOverrides?: object
  children: ReactNode
}

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ArrowRight />
    </div>
  )
}

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <ArrowLeft />
    </div>
  )
}

export const Carousel = ({ settingsOverrides, children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2.5,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, //Tailwind lg default
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, //Tailwind md default
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    ...settingsOverrides,
  }

  return <Slider {...settings}>{children}</Slider>
}
