import React, { useState } from "react"
import { Link } from "gatsby"
import { X, ChevronDown, ChevronUp } from "react-feather"
import logo from "../../assets/icons/logo.svg"
import styles from "./header-open.module.css"
import containerClasses from "../../styles/container.module.css"

type ProductItemsProps = {
  aestheticServices?: object
  oculoplasticServices?: object
  conditions?: object
}

type HeaderOpenProps = {
  siteTitle: string
  navLinks: Array<{
    name: string
    page: string
    id: number
    products?: boolean
    subLinks?: Array<{ name: string; page: string; id: number }>
  }>
  productItems: ProductItemsProps
  navToggle: () => Function
}

const SubMenuItem = ({ name, subLinks, id }) => {
  const [openState, setOpenState] = useState(false)

  return (
    <li
      key={`navigation-item-${id}`}
      data-testid="subLinkMenu"
      className={`animate-reveal uiRegular ${styles.headerNavigationLink} delay-${id}`}
      onClick={() => setOpenState(!openState)}
    >
      <span className={styles.headerNavigationSubMenu}>
        {name}
        {openState ? <ChevronUp /> : <ChevronDown />}
      </span>
      <div
        data-testid="subLinkMenuList"
        className={`${openState ? "block" : "hidden"}`}
      >
        {subLinks &&
          subLinks.map(({ name, page, id }) => (
            <a
              className="uiRegular"
              key={`navigation-sublink-item-${id}`}
              href={page}
            >
              {name}
            </a>
          ))}
      </div>
    </li>
  )
}

export const HeaderOpen = ({
  siteTitle,
  navLinks,
  navToggle,
  productItems,
}: HeaderOpenProps) => {
  return (
    <div className={`${styles.headerContainer} fadedBorder`}>
      <div className={`${styles.header} ${containerClasses.container}`}>
        <Link className={styles.headerLogo} to="/">
          <img className={styles.headerLogoImage} src={logo} alt={siteTitle} />
        </Link>
        <X className={styles.headerMenuIcon} onClick={navToggle} />
      </div>
      <nav
        className={`${styles.headerNavigation} ${containerClasses.container}`}
      >
        <ol>
          {navLinks.map(({ name, page, subLinks, id, products }) => {
            if (products) {
              let data

              // @ts-ignore: graphql data
              if (products === "conditions") {
                data = productItems.conditions
              }

              // @ts-ignore: graphql data
              if (products === "oculoplasticServices") {
                data = productItems.oculoplasticServices
              }

              // @ts-ignore: graphql data
              if (products === "aestheticServices") {
                data = productItems.aestheticServices
              }

              data.edges.sort((a, b) =>
                a.node.childMarkdownRemark.frontmatter.id >
                b.node.childMarkdownRemark.frontmatter.id
                  ? 1
                  : -1
              )

              const productsDestructured = data.edges.map(
                obj =>
                  // @ts-ignore: graphql data
                  obj.node.childMarkdownRemark.frontmatter
              )

              const productsDestructuredSubLinks = productsDestructured.map(
                ({ title, path, ...rest }) => {
                  return {
                    name: title,
                    page: path,
                    ...rest,
                  }
                }
              )

              return (
                <SubMenuItem
                  key={`navigation-item-${id}`}
                  name={name}
                  subLinks={productsDestructuredSubLinks}
                  id={id}
                />
              )
            }

            return subLinks && subLinks.length > 0 ? (
              <SubMenuItem
                key={`navigation-item-${id}`}
                name={name}
                subLinks={subLinks}
                id={id}
              />
            ) : (
              <li
                className={`animate-reveal ${styles.headerNavigationLink} delay-${id}`}
                data-testid="headerOpenNavigationLink"
                key={`navigation-item-${id}`}
              >
                <a className="uiRegular" href={`${page}`}>
                  {name}
                </a>
              </li>
            )
          })}
          <li
            className={`animate-reveal uiRegular delay-${navLinks.length + 1}`}
            key={`navigation-item-${navLinks.length + 1}`}
          >
            <a className="uiRegular" href="/contact">
              Contact
            </a>
          </li>
        </ol>
      </nav>
    </div>
  )
}
