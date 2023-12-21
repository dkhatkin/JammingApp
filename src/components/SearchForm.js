import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="SearchForm">
      <label className="SearchLabel" for="searchbar">Enter A Song Title</label>
      <input
        className="SearchBar"
        id="searchbar"
        type="text"
        placeholder="Thunderstruck - AC/DC"
      />
      <input className="SubmitButton" type="submit" value="SEARCH" />
    </form>
  );
}
export default SearchForm;
