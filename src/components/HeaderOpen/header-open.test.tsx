/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { queryAllByTestId, fireEvent } from "@testing-library/dom"
import { HeaderOpen } from "./header-open"

const testNavLinks = [
  {
    name: `Link 1`,
    page: `link-1`,
    subLinks: [
      {
        name: `Sub Link 1`,
        page: `Sub link-1`,
        id: 1,
      },
    ],
    id: 1,
  },
  {
    name: `Link 2`,
    page: `link-2`,
    subLinks: [
      {
        name: `Sub Link 1`,
        page: `Sub link-1`,
        id: 1,
      },
    ],
    id: 2,
  },
  {
    name: `Link 3`,
    page: `link-3`,
    subLinks: [],
    id: 3,
  },
]

const noneSubLinks = testNavLinks.filter(item => !(item.subLinks.length > 0))
const hasSubLinks = testNavLinks.filter(item => item.subLinks.length > 0)

afterEach(() => {
  cleanup()
})

describe("<HeaderOpen />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <HeaderOpen
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        productItems={{}}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should have the length of links passed through", () => {
    const { container } = render(
      <HeaderOpen
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        productItems={{}}
      />
    )

    expect(
      queryAllByTestId(container, "headerOpenNavigationLink")
    ).toHaveLength(noneSubLinks.length)
  })

  it("toggles subLink class", () => {
    const { container } = render(
      <HeaderOpen
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        productItems={{}}
      />
    )

    const subLinks = queryAllByTestId(container, "subLinkMenu")
    expect(subLinks).toHaveLength(hasSubLinks.length)

    const sublinkMenuList = queryAllByTestId(subLinks[0], "subLinkMenuList")[0]

    expect(sublinkMenuList).toHaveClass("hidden")

    fireEvent.click(sublinkMenuList)

    expect(sublinkMenuList).toHaveClass("block")
  })
})
