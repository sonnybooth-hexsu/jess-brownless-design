import { useStaticQuery, graphql } from "gatsby"

const AestheticServices = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "aestheticServices" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                id
                title
                path
                excerpt
              }
            }
          }
        }
      }
    }
  `)
  return data
}

export default AestheticServices
