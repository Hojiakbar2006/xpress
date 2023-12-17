import React from 'react'
import ManageSearchIcon from "@mui/icons-material/ManageSearch";import "./style.css"


export function Search({ setSearch }) {
  return (
    <div id="SearchBar">
      <h1>Welcome Product Page</h1>
      <div id="fromSearch">
        <input
          autoComplete="off"
          name="filterr"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <button>
          <ManageSearchIcon sx={{ fontSize: 40 }} />
        </button>
      </div>
    </div>
  );
}
