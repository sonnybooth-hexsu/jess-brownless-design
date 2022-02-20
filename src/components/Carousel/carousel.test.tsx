/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { queryAllByTestId } from "@testing-library/dom"
import { Carousel } from "./carousel"

afterEach(() => {
  cleanup()
})

describe("<ProductCard />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Carousel>
        <div>Carousel Item 1</div>
        <div>Carousel Item 2</div>
        <div>Carousel Item 3</div>
        <div>Carousel Item 4</div>
      </Carousel>
    )

    expect(container).toMatchSnapshot()
  })

  it("number of children/slides passed through should match", () => {
    const { container } = render(
      <Carousel>
        <div data-testid="carouselSlider">Carousel Item 1</div>
        <div data-testid="carouselSlider">Carousel Item 2</div>
        <div data-testid="carouselSlider">Carousel Item 3</div>
        <div data-testid="carouselSlider">Carousel Item 4</div>
      </Carousel>
    )

    expect(queryAllByTestId(container, "carouselSlider")).toHaveLength(4)
  })
})
