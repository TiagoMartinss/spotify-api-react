import "./search.css";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import SearchContent from "../search-content/search-content";

interface SearchProps {
  accessToken?: string;
}

const Search: React.FC<SearchProps> = ({ accessToken }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-main">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Rechercher avec des mots clés..."
        />
      </form>
      <SearchContent searchSTR={searchValue} accessToken={accessToken} />
    </div>
  );
};

export default Search;