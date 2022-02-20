/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import Footer from "./footer"

afterEach(() => {
  cleanup()
})

const productItems = {
  oculoplasticServices: {
    edges: [],
  },
  aestheticServices: {
    edges: [],
  },
  conditions: {
    edges: [],
  },
}

describe("<Footer />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Footer productItems={productItems} siteTitle="Test Site" />
    )

    expect(container).toMatchSnapshot()
  })
})
