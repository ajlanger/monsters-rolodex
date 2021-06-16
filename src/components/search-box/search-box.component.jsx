import React from "react";

import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input
          className="search"
          type="search"
          placeholder={placeholder}
          onChange={
            handleChange //After setState has run (bc it's asynchronous), it will call the second function
          }
        />
    )
};
