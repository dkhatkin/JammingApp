import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [userinput, setUserinput] = useState("");
  function handleChange({ target }) {
    setUserinput(target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <label className="SearchLabel" for="searchbar">
        Enter A Song Title
      </label>
      <input
        className="SearchBar"
        id="searchbar"
        type="text"
        placeholder="Thunderstruck - AC/DC"
        value={userinput}
        onChange={handleChange}
      />
      <input className="SubmitButton" type="submit" value="SEARCH" />
    </form>
  );
}
export default SearchForm;
