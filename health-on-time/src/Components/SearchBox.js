import React, { useState } from "react";
import { Button, Container, Col, Form } from "react-bootstrap";

const SearchBox = (props) => {
  // Change the state whenever there's change in the input fileld
  const [title, setTitle] = useState("");

  return (
    <div className="d-flex justify-content-center">
      {/* 
      <Form inline>
        
        <Form.Group controlId="formSearchTerm">
          <Form.Label className="mr-3">Enter the medication name to begin setting up a schedule.</Form.Label>
            <Form.Control className="mb-2" type="type" placeholder="Type to search..." onChange={(event) => setTitle(event.target.value)} />
          <Button
            style={{verticalAlighn: "top"}}
              onClick={(e) => {
              e.preventDefault();
              props.setSearchValue(title);
              }}
              className="ml-2"
            >Search</Button>
        </Form.Group>
        
      </Form>
            */}
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          props.setSearchValue(title);
        }}
      >
        <label className="sr-only" htmlFor="inlineFormSearchTerm">Search</label>
        <input type="text"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormSearchTerm"
          placeholder="Type to search..."
          onChange={
            event => setTitle(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={e =>{
            e.preventDefault();
            props.setSearchValue(title);
          }}
        >Submit</button>
      </form>
    </div>
  );
};

export default SearchBox;
