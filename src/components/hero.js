import React from 'react'
import styled from "styled-components";

// components
import H1 from '../components/typography/h1'
import P from '../components/typography/p'
import Script from '../components/typography/script'
import Img from "gatsby-image/withIEPolyfill"

const Hero = ({ headline, paragraph, signature, image }) => {
    return (
        <HeroWrapper>
            <Copy>
                <CopyWrapper>
                    <H1 color="#FFF">{headline}</H1>
                    <P color="#FFF">{paragraph}</P>
                    <Script color="#FFF">{signature}</Script>
                </CopyWrapper>
            </Copy>
            <Image
                fluid={image}
                objectPosition='0% 50%'
            />
        </HeroWrapper>
    );
};

const HeroWrapper = styled.div`
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: 60% 40%;
        height: 60vh;
    }
`
const Copy = styled.div`
    background: #095129;
    box-shadow: inset 0px 0px 250px rgba(0, 0, 0, 0.25);
    @media (min-width: 800px) {
        position: relative;
    }
`
const CopyWrapper = styled.div`
    padding: 2em 2em 14em 2em;
    @media (min-width: 800px) {
        padding: 2em;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        width: 90%;
    }
`
const Image = styled(Img)`
    display: absolute;
    right: 0;
    @media (max-width: 800px) {
        width: 90%;
        margin: 0 auto;
        height: 45%;
        margin-top: -13em;
    }
`

export default Hero;