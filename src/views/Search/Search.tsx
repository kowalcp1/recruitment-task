import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import * as actions from "../../store/actions";

const SearchForm = styled.form`
    margin: 2em;
    color: #eee;
`;

const SearchFormInput = styled.input`
    padding: 0.75em 1em;
    margin 0.5em;
    border-radius: 1em;
    border: 2px solid #ccc;
    outline: none;
`

const SearchButton = styled.button`
    padding: 0.75em 1em;
    margin 0.5em;
    border-radius: 1em;
    border: 2px solid #ccc;
    outline: none;
    transition: box-shadow 0.3s;
    background: #fff;
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 1em #ccc;
    }
`

const Search = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchText(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(actions.searchByName({ searchText }))
    };

    return (
        <SearchForm onSubmit={handleSubmit}>
            <SearchFormInput
                onChange={handleSearch}
                value={searchText}
                placeholder="Search for movie..."
            />
            <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
    );
}

export default Search;