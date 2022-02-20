/* eslint no-undef: 0 */

import React from "react"
import { render } from "@testing-library/react"
import { getByText, getByTestId, getByAltText } from "@testing-library/dom"
import { TextImage } from "./text-image"
import cover1 from "../assets/images/cover-1.jpg"

describe("<TextImage />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <TextImage image={cover1} imageAlt="Girl smiling" additionalClasses="">
        <h2 data-testid="textImageChild">I am test child</h2>
      </TextImage>
    )

    expect(container).toMatchSnapshot()
  })

  it("should render child", () => {
    const { container } = render(
      <TextImage image={cover1} imageAlt="Girl smiling" additionalClasses="">
        <h2 data-testid="textImageChild">I am test child</h2>
      </TextImage>
    )

    const childEl = getByTestId(container, "textImageChild")

    expect(getByText(childEl, "I am test child"))
  })

  it("should render image alt", () => {
    const { container } = render(
      <TextImage image={cover1} imageAlt="Girl smiling" additionalClasses="">
        <h2 data-testid="textImageChild">I am test child</h2>
      </TextImage>
    )

    expect(getByAltText(container, "Girl smiling"))
  })

  it("reverses image and text", () => {
    const { container } = render(
      <TextImage
        reverse
        image={cover1}
        imageAlt="Girl smiling"
        additionalClasses=""
      >
        <h2 data-testid="textImageChild">I am test child</h2>
      </TextImage>
    )

    expect(getByTestId(container, "textImageCoverReverse"))
  })
})
