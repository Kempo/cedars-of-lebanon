import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <h1>Whoops!</h1>
    <p>There doesn't seem to be a page here sadly.</p>
  </Layout>
)

export default NotFoundPage
