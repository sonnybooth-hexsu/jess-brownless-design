import { useStaticQuery, graphql } from "gatsby"

const Conditions = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "conditions" } }) {
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

export default Conditions
