import React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import containerClasses from "../styles/container.module.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Not Found" />
    <div className={`${containerClasses.container} py-30`}>
      <p>
        Page not found. <Link to="/">Return home</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
