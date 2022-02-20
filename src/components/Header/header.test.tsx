/* eslint no-undef: 0 */

import React from "react"
import { render, cleanup } from "@testing-library/react"
import { queryAllByTestId } from "@testing-library/dom"
import { Header } from "./header"

const testNavLinks = [
  {
    name: `Link 1`,
    nameShort: `Link 1`,
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
    nameShort: `Link 2`,
    page: `link-2`,
    subLinks: [],
    id: 2,
  },
  {
    name: `Link 3`,
    nameShort: `Link 3`,
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

describe("<Header />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Header
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        productItems={{}}
        openMenu={0}
        menuToggle={() => Function}
        page="test"
      />
    )

    expect(container).toMatchSnapshot()
  })

  it("should have the length of links passed through", () => {
    const { container } = render(
      <Header
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        productItems={{}}
        openMenu={0}
        menuToggle={() => Function}
        page="test"
      />
    )

    expect(queryAllByTestId(container, "headerNavigationLink")).toHaveLength(
      noneSubLinks.length
    )
  })

  it("toggles subLink class", () => {
    const { container } = render(
      <Header
        siteTitle="Test Site"
        navLinks={testNavLinks}
        navToggle={() => Function}
        productItems={{}}
        openMenu={1}
        menuToggle={() => Function}
        page="test"
      />
    )

    const subLinks = queryAllByTestId(container, "subLinkMenu")
    expect(subLinks).toHaveLength(hasSubLinks.length)

    const sublinkMenuList = queryAllByTestId(subLinks[0], "subLinkMenuList")[0]

    expect(sublinkMenuList).toHaveClass("block")
  })
})
