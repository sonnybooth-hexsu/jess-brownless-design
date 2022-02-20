import React from "react"
import { Link } from "gatsby"
import { Menu } from "react-feather"
import { CMSSubNav } from "./CMSSubNav"
import { SubMenuItem } from "./SubMenuItem"
import { useScroll } from "../../utils/functions"
import logo from "../../assets/icons/logo.svg"
import styles from "./header.module.css"

type HeaderProps = {
  siteTitle: string
  navLinks: Array<{
    name: string
    nameShort: string
    page: string
    id: number
    subLinks?: Array<{ name: string; page: string; id: number }>
  }>
  productItems: object
  navToggle: () => Function
  openMenu: number
  menuToggle: () => Function
  headerBg?: string
  headerColor?: string
  page: string
}

const Navigation = ({
  navLinks,
  openMenu,
  menuToggle,
  productItems,
  page: pageRendered,
}) => {
  return (
    <nav className={styles.headerNavigation}>
      <ol className={styles.headerNavigationList}>
        {navLinks.map(({ name, nameShort, page, subLinks, id, products }) => {
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

            return (
              <CMSSubNav
                page={pageRendered === products}
                key={`navigation-item-${id}`}
                name={name}
                nameShort={nameShort}
                title="Treatments"
                items={productsDestructured}
                id={id}
                open={openMenu === id}
                openTrigger={menuToggle}
              />
            )
          }

          if (subLinks && subLinks.length > 0) {
            return (
              <SubMenuItem
                key={`navigation-item-${id}`}
                name={name}
                subLinks={subLinks}
                id={id}
                open={openMenu === id}
                openTrigger={menuToggle}
              />
            )
          }

          return (
            <li
              className={`${styles.headerNavigationLinkItem} ${
                name === pageRendered ? `afterBorder` : ``
              }`}
              data-testid="headerNavigationLink"
              key={`navigation-item-${id}`}
            >
              <Link className={styles.headerNavigationLink} to={`${page}`}>
                {nameShort ? (
                  <>
                    <span className="xl:hidden">{nameShort}</span>
                    <span className="hidden xl:block">{name}</span>
                  </>
                ) : (
                  <span>{name}</span>
                )}
              </Link>
            </li>
          )
        })}
        <li
          className={`${styles.headerNavigationLinkItem} ${
            pageRendered === "Contact" ? `afterBorder` : ``
          }`}
        >
          <Link className={styles.headerNavigationLink} to="/contact">
            Contact
          </Link>
        </li>
      </ol>
    </nav>
  )
}

export const Header = ({
  siteTitle,
  navLinks,
  navToggle,
  openMenu,
  menuToggle,
  headerBg,
  headerColor,
  productItems,
  page,
}: HeaderProps) => {
  const { scrollY, scrollDirection } = useScroll()

  return (
    <div
      className={`
      ${headerBg ? headerBg : "bg-Brand-white"}
      ${headerColor ? headerColor : "text-Brand-black"}
      ${scrollY > 500 ? styles.headerContainerFixed : ""}
      ${
        scrollY > 500 && scrollDirection === "down"
          ? styles.headerContainerRetreat
          : ""
      }
       ${styles.headerContainer} fadedBorder`}
    >
      <div className={`${styles.header} `}>
        <Link className={styles.headerLogo} to="/">
          <img className={styles.headerLogoImage} src={logo} alt={siteTitle} />
        </Link>
        <Menu onClick={navToggle} className={styles.headerMenuIcon} />
        <Navigation
          productItems={productItems}
          navLinks={navLinks}
          openMenu={openMenu}
          menuToggle={menuToggle}
          page={page}
        />
      </div>
    </div>
  )
}
