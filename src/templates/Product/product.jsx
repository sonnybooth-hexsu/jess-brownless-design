import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"
import styles from "./product.module.css"
import containerClasses from "../../styles/container.module.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, excerpt, image, type, video } = frontmatter
  return (
    <Layout page={type}>
      <SEO title={title} description={excerpt} />
      <div className="bg-Brand-biscuit">
        <div className={`${containerClasses.container} py-20 lg:py-24`}>
          <div className="col-span-12 lg:col-span-7">
            <h1 className="overline">Dr Yalda Clinics</h1>
            <h1 className="mt-4 uppercase headingResponsive01">
              A fresh, bespoke website{" "}
              <span className="italic normal-case">for</span> expert skin{" "}
              <span className="italic normal-case">&</span> cosmetic clinic
              group.
            </h1>
            <p></p>
          </div>
          <div className="grid grid-cols-12 col-span-12 gap-4 md:mt-8 lg:pt-6 lg:col-span-3 lg:col-start-10 lg:flex lg:flex-col">
            <div className="col-span-12 md:col-span-4">
              <h2 className="mt-8 overline md:mt-0">Company</h2>
              <p>Dr Yalda Clinics</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-5">
              <h2 className="overline lg:mt-0">Industry</h2>
              <p>Aesthetics</p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <h2 className="overline lg:mt-0">Visit</h2>
              <a href="#">www.dryalda.co.uk</a>
            </div>
          </div>
        </div>
      </div>
      <div className="headerHalfAndHalf">
        <div className={containerClasses.container}>
          <div className="col-span-12">
            <img className="w-full" src={image} alt="Blog banner" />
          </div>
        </div>
      </div>
      <div className="bg-Brand-white">
        <div className={`${containerClasses.container} py-0`}>
          <div
            className={`${styles.productContent} col-span-12 lg:col-span-10 lg:col-start-2 lg:px-8 xl:col-span-8 xl:col-start-3 xl:px-8 `}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {video ? (
            <div className="flex justify-center col-span-12">
              <video controls width="320" height="240">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}
        </div>
        =
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        excerpt
        image
        type
        video
      }
    }
  }
`
