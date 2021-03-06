import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h3 = ({ children, textAlign }) => {
    return (
        <H3 textAlign={textAlign}>{children}</H3>
    );
};

h3.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h3.defaultProps = {
    textAlign: "left",
};

const H3 = styled.h3`
    text-transform: uppercase;
    font-family: 'Cervo Neue';
    color: #000;
    font-size: 12px;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    font-display: auto;
    letter-spacing: 0.3em;
    @media (min-width: 800px) {
        font-size: 16px;
    }
    }
`
export default h3;