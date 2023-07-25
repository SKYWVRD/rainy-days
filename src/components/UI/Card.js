import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    background-color: grey;
    width: 20rem;
`;

const Card = ( props ) => {
    return (
    <StyledCard>
        {props.children}
    </StyledCard>
    )
}


export default Card