import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import { PostCard } from "../components/PostCard"
import containerClasses from "../styles/container.module.css"

const Blog = ({ data }) => {
  const dataArr = data?.allMarkdownRemark?.edges
  const blogsDestructured = []

  dataArr.map(blog => {
    return blogsDestructured.push({
      ...blog.node.frontmatter,
    })
  })

  return (
    <Layout page="Blog">
      <SEO title="Blog" />
      <div className="bg-Brand-white">
        <div
          className={`${containerClasses.container} mx-auto py-16 lg:pb-36==20 lg:pt-20 text-center`}
        >
          <h1 className="col-span-12 mt-4 text-center headingResponsive01">
            Blog Posts
          </h1>
          {/* <img className="inline w-16 h-10 mx-2 my-2" src={woman} alt="woman" /> */}
        </div>
      </div>
      <div className="bg-Brand-white">
        <div className={`${containerClasses.container} py-16 lg:py-24`}>
          {blogsDestructured.map(
            ({ title, category, path, date, image }, i) => (
              <PostCard
                key={`post-card-${i}`}
                title={title}
                category={category}
                path={path}
                date={date}
                image={image}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            layout
            title
            id
            category
            author
            path
            date
            excerpt
            image
            imageLarge
          }
        }
      }
    }
  }
`
