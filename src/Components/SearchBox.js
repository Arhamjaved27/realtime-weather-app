import React from 'react'
import { useState } from 'react';
import "./SearchBox.css";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    onSearch(query);
    setQuery("");
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">
        <span className="arrow">➜</span>
      </button>
    </form>
  );
}

export default SearchBox