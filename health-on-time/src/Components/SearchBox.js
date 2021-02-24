import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchBox = (props) => {
  // Change the state whenever there's change in the input fileld
  const [title, setTitle] = useState("");

  return (
    <div className="col col-sm-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setSearchValue(title);
        }}
      >
        <input
          placeholder="Type to search..."
          onChange={(event) => setTitle(event.target.value)}
        ></input>
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
