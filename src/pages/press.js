import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import styled from "styled-components";

// typography components
import H3 from '../components/typography/h3'
import H2 from '../components/typography/h2'
import P from '../components/typography/p'
import Container from '../components/container'


// components
import Hero from '../components/hero'

const PressPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <Hero 
      headline="Look momma! We made it in the news!"
      image={data.hero.childImageSharp.fluid}
    />
    <Container width="900px">
      <Article>
        <H3>New York Times</H3>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer"><H2>America’s Pumpkin Queen Has a Request</H2></StyledLink>
        <P>She grows more jacks (field shorthand for the basic big orange Halloween model) than anyone else in the country. This fall, she shipped more than five million. If it hadn’t been so hot and humid, she would have shipped more.</P>
      </Article>
      <Article>
        <H3>New York Times</H3>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer"><H2>America’s Pumpkin Queen Has a Request</H2></StyledLink>
        <P>She grows more jacks (field shorthand for the basic big orange Halloween model) than anyone else in the country. This fall, she shipped more than five million. If it hadn’t been so hot and humid, she would have shipped more.</P>
      </Article>
      <Article>
        <H3>New York Times</H3>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer"><H2>America’s Pumpkin Queen Has a Request</H2></StyledLink>
        <P>She grows more jacks (field shorthand for the basic big orange Halloween model) than anyone else in the country. This fall, she shipped more than five million. If it hadn’t been so hot and humid, she would have shipped more.</P>
      </Article>
      <Article>
        <H3>New York Times</H3>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer"><H2>America’s Pumpkin Queen Has a Request</H2></StyledLink>
        <P>She grows more jacks (field shorthand for the basic big orange Halloween model) than anyone else in the country. This fall, she shipped more than five million. If it hadn’t been so hot and humid, she would have shipped more.</P>
      </Article>
      <Article>
        <H3>New York Times</H3>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer"><H2>America’s Pumpkin Queen Has a Request</H2></StyledLink>
        <P>She grows more jacks (field shorthand for the basic big orange Halloween model) than anyone else in the country. This fall, she shipped more than five million. If it hadn’t been so hot and humid, she would have shipped more.</P>
      </Article>
      <Article>
        <H3>New York Times</H3>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer"><H2>America’s Pumpkin Queen Has a Request</H2></StyledLink>
        <P>She grows more jacks (field shorthand for the basic big orange Halloween model) than anyone else in the country. This fall, she shipped more than five million. If it hadn’t been so hot and humid, she would have shipped more.</P>
      </Article>
      <Article>
        <H3>New York Times</H3>
        <StyledLink href="#" target="_blank" rel="noopener noreferrer"><H2>America’s Pumpkin Queen Has a Request</H2></StyledLink>
        <P>She grows more jacks (field shorthand for the basic big orange Halloween model) than anyone else in the country. This fall, she shipped more than five million. If it hadn’t been so hot and humid, she would have shipped more.</P>
      </Article>
    </Container>
  </Layout>
)

export const query = graphql`
query {
  hero: file(relativePath: { eq: "press-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

const Article = styled.div`
  padding: 2em 0;
  border-bottom: 1px solid #E5E5E5;
  &:last-child {
    border-bottom: none;
  }
`
const StyledLink = styled.a`
  display: inline;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`

export default PressPage
