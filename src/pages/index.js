import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

// typography components
import H1 from '../components/typography/h1'
import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import Script from '../components/typography/script'

// components
import Hero from '../components/hero'

const Index = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <Hero 
      headline="From the seed, to our fields, to you."
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      signature="-Frey Farms"
      image={data.hero.childImageSharp.fluid}
    />
    <H1>This is a Header 1</H1>
    <H2>This is a Header 2</H2>
    <H3>This is a Header 3</H3>
    <Script>This is a script font</Script>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
query {
  hero: file(relativePath: { eq: "sarah-and-watermelons.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default Index
