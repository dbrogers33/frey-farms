import React from "react";
import styled from "styled-components";

import { StaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import MobileMenu from '../components/mobile-nav'


export default () => (
    <StaticQuery
      query={graphql`
        query {
            logo: file(relativePath: { eq: "frey-farms-logo.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 100, height: 100) {
                      ...GatsbyImageSharpFixed
                    }
                }
            }
        }
      `}
      render={data => (
        <div>
            <NavBar>
                <Logo fixed={data.logo.childImageSharp.fixed}/>
                <DesktopMenu>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/products">Products</StyledLink>
                    <StyledLink to="/our-heritage">Our Heritage</StyledLink>
                    <StyledLink to="/contact-us">The Growing Season</StyledLink>
                    <StyledLink to="/press">Press</StyledLink>
                </DesktopMenu>
            </NavBar>
            <MobileMenu />
        </div>
      )}
    />
  )

const NavBar = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    @media (max-width: 800px) {
        display: none;
    }
`
const Logo = styled(Img)`
    margin: 0 2em 0 2em;
`
const DesktopMenu = styled.nav`
    @media (max-width: 800px) {
        display: none;
    }
`
const StyledLink = styled(props => <Link {...props} />) `
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
    margin: 0 20px;
    font-family: 'Brandon Grotesque Medium';
    font-size: 14px;
    transition: .2s ease;
    :hover {
        border-bottom: solid 2px #FFF;
        cursor: pointer;
    }
`