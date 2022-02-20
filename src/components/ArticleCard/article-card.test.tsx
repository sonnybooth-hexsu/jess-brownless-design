/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { ArticleCard } from "./article-card"
import articles from "../../utils/articles"

afterEach(() => {
  cleanup()
})

describe("<ArticleCard />", () => {
  it("should match snapshot", () => {
    const { container } = render(<ArticleCard {...articles} />)

    expect(container).toMatchSnapshot()
  })

  it("has image item", () => {
    const { queryAllByTestId } = render(<ArticleCard {...articles} />)

    const images = queryAllByTestId("articleItemImage")

    expect(images).toHaveLength(1)
  })
})
