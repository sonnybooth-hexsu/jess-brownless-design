import React, { useContext, ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../Header"
import { HeaderOpen } from "../HeaderOpen"
import { Footer } from "../Footer"
import { ThemeContext } from "../../context/ThemeContext"

type LayoutProps = {
  children: ReactNode
  headerBg: string
  headerColor: string
  page: string
}

export const Layout = ({
  headerBg,
  headerColor,
  children,
  page,
}: LayoutProps) => {
  const {
    navOpen,
    navToggle,
    openMenu,
    menuToggle,
    filterOpenToggle,
    filterOpen,
  } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      aestheticServices: allFile(
        filter: { sourceInstanceName: { eq: "aestheticServices" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                id
                title
                path
              }
            }
          }
        }
      }
      conditions: allFile(
        filter: { sourceInstanceName: { eq: "conditions" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                id
                title
                path
              }
            }
          }
        }
      }
      oculoplasticServices: allFile(
        filter: { sourceInstanceName: { eq: "oculoplasticServices" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                id
                title
                path
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          email
          telephone
          address
          navLinks {
            name
            nameShort
            page
            id
            products
            subLinks {
              name
              page
              id
            }
          }
        }
      }
    }
  `)

  const products = {
    aestheticServices: { ...data.aestheticServices },
    conditions: { ...data.conditions },
    oculoplasticServices: { ...data.oculoplasticServices },
  }

  return (
    <div
      onClick={() => {
        if (openMenu > 0) menuToggle(0)
        if (filterOpen) filterOpenToggle(false)
      }}
    >
      {!navOpen ? (
        <Header
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
          navToggle={navToggle}
          openMenu={openMenu}
          productItems={products}
          menuToggle={menuToggle}
          headerBg={headerBg}
          headerColor={headerColor}
          page={page}
        />
      ) : (
        <HeaderOpen
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
          productItems={products}
          navToggle={navToggle}
        />
      )}
      <main className="relative">
        {openMenu > 0 && (
          <div className="fixed top-0 left-0 z-40 w-full h-full bg-gray-900 opacity-75"></div>
        )}
        {children}
      </main>
      <Footer
        productItems={products}
        siteTitle={data.site.siteMetadata.title}
      />
    </div>
  )
}

export default Layout
