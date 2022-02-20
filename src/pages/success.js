import React from "react"
import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
import containerClasses from "../styles/container.module.css"

const Success = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <div className={`${containerClasses.container} pt-24 pb-30`}>
        <h1 className="py-8 headingResponsive01">Success!</h1>
        <p>
          You have now sent your enquiry to Miss Elizabeth Hawkes&apos; team
        </p>
      </div>
    </Layout>
  )
}

export default Success
