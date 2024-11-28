// src/components/SortSelector.js
import React from "react";
import "../styles/SortSelectorStyles.css";

const SortSelector = ({ sorting, setSorting }) => {
  return (
    <div className="sort-selector">
      <label>Sort by:</label>
      <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortSelector;
