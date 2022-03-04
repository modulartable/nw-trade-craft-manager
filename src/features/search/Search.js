import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div id="searchContainer">
      <div>
        <input id="searchBox" className="searchDiv" placeholder="Enter a resource name" />
      </div>
    </div>
  );
};

export { Search };
