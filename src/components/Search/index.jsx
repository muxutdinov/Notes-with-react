import React from "react";
import search from "../../assets/icons/search.png";
import { SearchIcon, Searchs } from "./style";
export const Search = ({ handleSearchNote }) => {
  return (
    <Searchs>
      <SearchIcon src={search} />
      <input
        placeholder="Type to search..."
        type="text"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </Searchs>
  );
};
