/* eslint no-undef: 0 */

import React from "react"
import { render } from "@testing-library/react"
import { CTABlock } from "./cta-block"

describe("<CTABlock />", () => {
  it("should match snapshot", () => {
    const { container } = render(<CTABlock />)

    expect(container).toMatchSnapshot()
  })
})
