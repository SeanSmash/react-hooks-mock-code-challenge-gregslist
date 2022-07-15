import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")
  //const [searchInput, setSearchInput] = useState("")

  function handleSearchInput(input){
    setSearchTerm(input)
    onSearch(searchTerm)
  }

  function handleSubmit(e) {
    e.preventDefault();
    //onSearch(searchTerm);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
