import React from 'react'
import styled from "styled-components";

import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import P from '../components/typography/p'
import Img from "gatsby-image/withIEPolyfill"

const SideBySide = ({ headerThree, headerTwo, paragraph, alt, src }) => {
    return (
        <Wrapper>
            <FlexItem>
            <Image
                fluid={src}
                alt={alt}
            />
            </FlexItem>
            <FlexItem>
                <H3>{headerThree}</H3>
                <H2>{headerTwo}</H2>
                <P>{paragraph}</P>
            </FlexItem>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 2em 0;
    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`

const Image = styled(Img)`

`

const FlexItem = styled.div`
    width: calc(100% / 2 - 2em);
    margin: 1em;
`

export default SideBySide;