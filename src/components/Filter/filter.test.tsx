/* eslint no-undef: 0 */
import React from "react"
import { render } from "@testing-library/react"
import { queryAllByTestId } from "@testing-library/dom"
import { Filter } from "./filter"
import Provider from "../../context/ThemeContext"
const productCategories = [
  {
    title: "Categories",
    uid: "category",
  },
]
const productsDestructured = [
  {
    id: 1,
    layout: "product",
    title: "Eye treatment 1",
    category: "Eye",
    path: "/eye-treatment-1",
    excerpt: "I am eye treatment 1",
    image: "assets/eye.svg",
    imageLarge: "assets/cheek-filler-image.jpg",
    productAttributeTitleOne: "Attr 1",
    productAttributeTitleTwo: "Attr 2",
    productAttributeTitleThree: "Attr 3",
    productAttributeTitleFour: " Attr 4",
    productAttributeValueOne: "100",
    productAttributeValueTwo: "200",
    productAttributeValueThree: "300",
    productAttributeValueFour: "400",
  },
  {
    id: 2,
    layout: "product",
    title: "Face treatment 1",
    category: "Face",
    path: "/face-treatment-1",
    excerpt: "I am face treatment 1",
    image: "assets/face.svg",
    imageLarge: "assets/cheek-filler-image.jpg",
    productAttributeTitleOne: "Attr 1",
    productAttributeTitleTwo: "Attr 2",
    productAttributeTitleThree: "Attr 3",
    productAttributeTitleFour: "Attr 4",
    productAttributeValueOne: "100",
    productAttributeValueTwo: "200",
    productAttributeValueThree: "300",
    productAttributeValueFour: "400",
  },
]
describe("<Filter />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Provider>
        <Filter
          filteredLength={2}
          types={productCategories}
          items={productsDestructured}
          setItemsState={() => {
            return []
          }}
        />
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
  it("should have correct number of checkoboxes", () => {
    const { container } = render(
      <Provider>
        <Filter
          filteredLength={2}
          types={productCategories}
          items={productsDestructured}
          setItemsState={() => {
            return []
          }}
        />
      </Provider>
    )
    expect(queryAllByTestId(container, "filterCheckbox")).toHaveLength(2)
  })
})
