import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

// typography components
import H1 from '../components/typography/h1'


// components
import Hero from '../components/hero'

const ProductPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <Hero 
      headline="Our products from our land, to your home."
      image={data.hero.childImageSharp.fluid}
    />
    <H1>This is a Header 1</H1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
query {
  hero: file(relativePath: { eq: "bubbler-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default ProductPage
