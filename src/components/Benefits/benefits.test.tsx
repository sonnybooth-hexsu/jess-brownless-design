/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import Benefits from "./benefits"
import benefits from "../../utils/benefits"

afterEach(() => {
  cleanup()
})

describe("<Benefits />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Benefits benefits={benefits} />)

    expect(container).toMatchSnapshot()
  })

  it("has partnership image", () => {
    const { queryAllByTestId } = render(<Benefits benefits={benefits} />)

    const images = queryAllByTestId("benefitsItem")

    expect(images).toHaveLength(benefits.length)
  })
})
