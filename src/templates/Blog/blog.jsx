import React from "react"
import { Facebook, Twitter, Linkedin, Instagram } from "react-feather"
import { graphql } from "gatsby"
import { Layout } from "../../components/Layout"
import { AffiliateList } from "../../components/AffiliateList"
import { SEO } from "../../components/SEO"
import profileOnWhiteArmsFoldedColoured from "../../assets/images/profile-on-white-arms-folded-coloured.jpg"
import profileOnWhiteArmsFoldedColouredX2 from "../../assets/images/profile-on-white-arms-folded-coloured-x2.jpg"
import styles from "./blog.module.css"
import containerClasses from "../../styles/container.module.css"
import { CTABlock } from "../../components/CTABlock"

export default function Template({ data }) {
  const domain = data.site.siteMetadata.domain
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const {
    date,
    title,
    path,
    author,
    authorImage,
    category,
    excerpt,
    imageLarge,
  } = frontmatter

  const isSSR = typeof window === "undefined"

  if (!isSSR) {
    const fbShare = () => {
      return ((d, s, id) => {
        const fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        const js = d.createElement(s)
        js.id = id
        js.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"
        fjs.parentNode.insertBefore(js, fjs)
      })(document, "script", "facebook-jssdk")
    }

    const twitterShare = () => {
      window.twttr = (function(d, s, id) {
        const fjs = d.getElementsByTagName(s)[0]
        const t = window.twttr || {}
        if (d.getElementById(id)) return t
        const js = d.createElement(s)
        js.id = id
        js.src = "https://platform.twitter.com/widgets.js"
        fjs.parentNode.insertBefore(js, fjs)

        t._e = []
        t.ready = function(f) {
          t._e.push(f)
        }

        return t
      })(document, "script", "twitter-wjs")
    }

    twitterShare()
    fbShare()
  }

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <div className="text-Brand-black bg-Brand-biscuit">
        <div
          className={`${containerClasses.container} py-16 lg:py-26 text-center`}
        >
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:px-8 lg:col-span-8 lg:col-start-3">
              <p className="text-left overline text-secondaryBrand-8">
                {category}
              </p>
              <h1 className="mt-6 text-left headingResponsive01 lg:display3XL">
                {title}
              </h1>
              {/* <div className="flex items-center justify-center mt-10">
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <img loading="lazy" src={authorImage} alt="Author profile" />
                </div>
                <div className="ml-4 text-left">
                  <p className="text-white">{author}</p>
                  <p className="text-white small">{date}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="headerHalfAndHalfDarker">
        <div className={containerClasses.container}>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <img className="w-full" src={imageLarge} alt="Blog banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className={`${containerClasses.container} pt-16 py-8`}>
          <div className="lg:grid lg:grid-cols-12 lg:gap-6">
            <div className="hidden lg:col-span-1 lg:flex lg:items-center">
              <div className="flex flex-col items-center w-full">
                <div className="relative flex items-center justify-center w-10 h-10 mt-4 overflow-hidden text-white rounded-full bg-Brand-green">
                  <div className="absolute top-0 z-20 flex items-center justify-center w-10 h-10 pointer-events-none bg-Brand-green">
                    <Facebook size="18" />
                  </div>
                  <div
                    className="z-10 fb-share-button"
                    data-href={`${domain}${path}`}
                    data-layout="button"
                    data-show-count="false"
                  >
                    Share to Facebook
                  </div>
                </div>
                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 mt-4 text-white rounded-full bg-Brand-green"
                  data-show-count="false"
                >
                  <span className="sr-only">Tweet</span>
                  <Twitter size="18" />
                </a>
              </div>
            </div>
            <div
              className={`${styles.blogContent} lg:col-span-8 lg:col-start-3 xl:col-span-6 xl:col-start-4 `}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="lg:col-span-8 lg:col-start-3 lg:hidden">
              <div className="flex items-center mt-16">
                <span className="mr-4">Share</span>
                <div className="relative flex items-center justify-center w-10 h-10 mr-4 overflow-hidden text-white rounded-full bg-Brand-green">
                  <div className="absolute top-0 z-20 flex items-center justify-center w-10 h-10 pointer-events-none bg-Brand-green">
                    <Facebook size="18" />
                  </div>
                  <div
                    className="z-10 fb-share-button"
                    data-href={`${domain}${path}`}
                    data-layout="button"
                    data-show-count="false"
                  >
                    Share to Facebook
                  </div>
                </div>
                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-Brand-green"
                  data-show-count="false"
                >
                  <span className="sr-only">Tweet</span>
                  <Twitter size="18" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-Brand-biscuit lg:py-20">
        <div className={containerClasses.container}>
          <div className="col-span-12 lg:col-span-1 lg:col-start-3 xl:col-start-4">
            <div className="w-12 h-12 overflow-hidden rounded-full">
              <img
                loading="lazy"
                alt="Author profile"
                src={profileOnWhiteArmsFoldedColoured}
                srcSet={`${profileOnWhiteArmsFoldedColoured} 1x, ${profileOnWhiteArmsFoldedColouredX2} 2x`}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 xl:col-span-5 lg:col-start-4 xl:col-start-5 lg:ml-4 xl:ml-0">
            <p className="mt-6 uppercase overline">Posted by</p>
            <p className="mt-4 font-serif text-5xl font-light leading-none">
              Jess Brownless
            </p>
            <p className="mt-4 text-sm leading-6">
              Jess Brownless is a designer, specialising in web design for
              aesthetics, private healthcare and wellness. With a creative
              background and 5+ years working in the design industry, Jess has
              leared a thing or two about delivering high-quality, user focused
              great looking design projects.
            </p>
            <div className="flex items-center mt-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/dr_elizabethhawkes/"
              >
                <Instagram />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2"
                href="https://www.linkedin.com/in/elizabeth-hawkes-84410588/"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <CTABlock />
      <AffiliateList />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        id
        date(formatString: "MMMM DD, YYYY")
        title
        path
        author
        category
        excerpt
        authorImage
        imageLarge
      }
    }
    site {
      siteMetadata {
        domain
      }
    }
  }
`
