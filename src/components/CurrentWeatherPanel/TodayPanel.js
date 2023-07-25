import React from "react";
import CurrentTemp from "./CurrentTemp";
import styled from "styled-components";

const StyledPanel = styled.div `
    display: grid;
    gap: 5px;
    grid-template-columns: auto auto;

`;

const TodayPanel = () => {

    return (<StyledPanel>
        <CurrentTemp/>
        <CurrentTemp/>
        <CurrentTemp/>
        <CurrentTemp/>
    </StyledPanel>
    )
}

export default TodayPanel;