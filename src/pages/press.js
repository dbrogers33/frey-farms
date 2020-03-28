import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Press = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Press Page</h1>
    <p>Welcome to Press Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Press
