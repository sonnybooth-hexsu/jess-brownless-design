import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { ArticleCard } from "../components/ArticleCard"
import { AffiliateList } from "../components/AffiliateList"
import { FilterTags } from "../components/FilterTags"
import profileOnWhiteArmsFolded from "../assets/images/profile-on-white-arms-folded.jpg"
import profileOnWhiteArmsFoldedX2 from "../assets/images/profile-on-white-arms-folded-x2.jpg"
import containerClasses from "../styles/container.module.css"

const InThePress = ({ data }) => {
  const dataArr = data?.allMarkdownRemark?.edges

  const articlesDestructured = []

  dataArr.map(article => {
    return articlesDestructured.push({
      ...article.node.frontmatter,
    })
  })

  const [articles, setArticlesState] = useState(articlesDestructured)

  const pressCategories = [
    {
      title: "Year",
      uid: "yearNumber",
    },
  ]

  return (
    <Layout page="In The Press">
      <SEO title="In The Press" />
      <div className="text-white bg-Brand-green">
        <div className={`${containerClasses.container} py-16 text-center`}>
          <div className="mx-auto overflow-hidden bg-transparent rounded-full w-18 h-18">
            <img
              loading="lazy"
              alt="Dr Hawkes"
              src={profileOnWhiteArmsFolded}
              srcSet={`${profileOnWhiteArmsFolded} 1x, ${profileOnWhiteArmsFoldedX2} 2x`}
            />
          </div>
          <p className="mt-4 overline text-secondaryBrand-8">
            Miss E Hawkes FRCOphth MBBS BSc
          </p>
          <h1 className="mt-4 headingResponsive01">In the press</h1>
        </div>
      </div>
      <div className={`${containerClasses.container} py-12 lg:py-24`}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <FilterTags
              types={pressCategories}
              items={articlesDestructured}
              setItemsState={setArticlesState}
            />
          </div>
          <div className="col-span-12 lg:col-span-10">
            {articles.map((article, key) => (
              <div key={`article-${key}`} className="mb-20 lg:mb-10">
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <AffiliateList />
    </Layout>
  )
}

export default InThePress

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/press/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            id
            dateText
            yearNumber
            title
            excerpt
            image
            article
          }
        }
      }
    }
  }
`
