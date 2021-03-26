import React, { useState } from "react";
import "./form.css";

const Form = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  // setting-up search query in input bar
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // appending search to get data from api
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <form className="search-form" onSubmit={getSearch}>
        <input className="form-input" type="text" value={search} onChange={updateSearch} />
        <button className="form-submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
