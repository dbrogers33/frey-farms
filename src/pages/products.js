import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

// typography components
import H1 from '../components/typography/h1'
import SideBySide from '../components/side-by-side'
import Container from '../components/container'


// components
import Hero from '../components/hero'

const ProductPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <Hero 
      headline="Our products from our land, to your home."
      image={data.hero.childImageSharp.fluid}
    />


    <Container>
      <SideBySide
        headerThree="Sarah's Home Grown"
        headerTwo="Produce"
        paragraph="From the very beginning, Frey Farms was about finding the best fruit and vegetables for distribute across the country. More than 25 years later, The Frey Family still bases its business on produce, serving the nation’s largest retailers."
        src={data.produce.childImageSharp.fluid}
        alt="Sarah's homegrown produce"
      />
      <SideBySide
        headerThree="Sarah's Home Grown"
        headerTwo="Beverages"
        paragraph="Sarah's Homegrown is an innovative line of fresh, all-natural beverages, sourced from the farm.  All natural and no GMOs. Available in agua frescas, teas, and lemonades, Sarah's Homegrown bottles up farm fresh goodness.  Our delicious flavors include Strawberry Lemonade, Mango, Watermelon, Lime Mint, and Pineapple coconut.
        "
        src={data.beverages.childImageSharp.fluid}
        alt="Sarah's homegrown beverages"
      />
      <SideBySide
        headerThree="Watermelon Hydration"
        headerTwo="Tsamma"
        paragraph="Watermelon has been a source of natural, refreshing hydration for thousands of
        years. At Frey Farms we are committed to the growth and science of watermelon,
        and to the best practices to create leading watermelon products.
        Each bottle of Tsamma has the taste of a juicy watermelon and is packed with
        immune boosting nutrients. Citrulline is naturally found in watermelon and
        improves blood flow, allowing your body to absorb nutrients and hydrate faster."
        src={data.tsamma.childImageSharp.fluid}
        alt="Tsamma Hydration"
      />
    </Container>


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
  produce: file(relativePath: { eq: "products/produce.png" }) {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  beverages: file(relativePath: { eq: "products/sarahshomegrown.png" }) {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  tsamma: file(relativePath: { eq: "products/tsamma.png" }) {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default ProductPage
