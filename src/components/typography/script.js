import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const Script = ({ children, textAlign, color }) => {
    return (
        <H1 textAlign={textAlign}>{children}</H1>
    );
};

Script.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

Script.defaultProps = {
    textAlign: "left",
    color: "black"
};

const H1 = styled.h2`
    font-family: 'Handelson';
    color: ${props => props.color};
    font-weight: 800;
    font-size: 28px;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    @media (min-width: 800px) {
        font-size: 72px;
    }
`
export default Script;