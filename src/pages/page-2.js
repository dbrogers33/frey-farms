import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// components
import H1 from '../components/typography/h1'
import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import Script from '../components/typography/script'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <H1>This is a Header 1</H1>
    <H2>This is a Header 2</H2>
    <H3>This is a Header 3</H3>
    <Script>This is a script font</Script>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
