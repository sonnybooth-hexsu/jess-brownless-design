import React, { useContext } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "../../context/ThemeContext"
import placeholder from "../../assets/images/placeholder-image.jpg"

type SEOProps = {
  description: string
  lang: string
  meta: Array<{ name: string; content: string }>
  title: string
}

export const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const { navOpen, filterOpen, openMenu } = useContext(ThemeContext)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            domain
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      bodyAttributes={{
        class: `${navOpen || openMenu > 0 ? "overflow-hidden" : ""} ${
          filterOpen ? "overflow-hidden" : ""
        }`,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.domain,
        },
        {
          property: `og:image`,
          content: placeholder,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://use.typekit.net/ocn2blu.css"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
