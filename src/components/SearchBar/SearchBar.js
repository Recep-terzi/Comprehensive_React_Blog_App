import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";
const SearchBar = () => {
  const [word, setWord] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${word}`);
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          id="search"
          onChange={(e) => setWord(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
