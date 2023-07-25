import React, {useState} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    font-size: 30px;
    border-radius: 15px;
    border-color: black;
`;

const SearchBar = () => {
    
    const [searchInput, setSearchInput] = useState('');

    const searchChangeHandler = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <>
            <form>
                <StyledInput value={searchInput} placeholder="Search for location" onChange={searchChangeHandler}/>
            </form>
        </>
    )
}

export default SearchBar