import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchBox = (props) => {
  const [title, setTitle] = useState("");

  return (
    <div className="col col-sm-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setSearchValue(title);
        }}
      >
        <input onChange={(event) => setTitle(event.target.value)} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            props.setSearchValue(title);
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;

// <input
//   className="form-control"
//   value={props.value}
//   placeholder="Type to search..."
//   onChange={(event) => props.setSearchValue(event.target.value)}
// ></input>;
