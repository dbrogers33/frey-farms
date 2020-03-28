import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OurHeritage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Heritage page</h1>
    <p>Welcome to Our Heritage</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default OurHeritage
