/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import Partnerships from "./partnerships"
import partnerships from "../../utils/partnerships"

afterEach(() => {
  cleanup()
})

describe("<Partnerships />", () => {
  it("should match snapshot", () => {
    const { container } = render(<Partnerships images={partnerships} />)

    expect(container).toMatchSnapshot()
  })

  it("has partnership image", () => {
    const { queryAllByTestId } = render(<Partnerships images={partnerships} />)

    const images = queryAllByTestId("partnershipImg")

    expect(images).toHaveLength(partnerships.length)
  })
})
