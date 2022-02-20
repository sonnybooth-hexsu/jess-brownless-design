/* eslint no-undef: 0 */

import React from "react"
import { render } from "@testing-library/react"
import { getByText, getByTestId } from "@testing-library/dom"
import { PostCard } from "./postcard"

describe("<PostCard />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <PostCard
        title="Post card title"
        category="Post card category"
        path="/test"
        date="12/01/98"
        image="/test-image.jpg"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should recieve title prop", () => {
    const { container } = render(
      <PostCard
        title="Post card title"
        category="Post card category"
        path="/test"
        date="12/01/98"
        image="/test-image.jpg"
      />
    )

    const titleEl = getByTestId(container, "postcardTitle")

    expect(getByText(titleEl, "Post card title"))
  })
})
