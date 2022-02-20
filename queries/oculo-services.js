import { useStaticQuery, graphql } from "gatsby"

const OculoServices = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "oculoplasticServices" } }) {
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

export default OculoServices
