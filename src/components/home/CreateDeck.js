import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";
import NavBar from "../common/NavBar";

export default function CreateDeck() {
  const initialFormState = { name: "", description: "" };
  const [formData, setFormData] = useState({ ...initialFormState });
  const history = useHistory();
  // update form data when changed
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  // create deck and navigate to new deck page
  const handleSubmit = event => {
    event.preventDefault();
    createDeck(formData)
      .then(updateDeck)
      .then(newDeck => history.push(`/decks/${newDeck.id}`))
      .catch(console.error);
  };

  return (
    <>
      <NavBar navTitles={["Create Deck"]} />
      <div className="container w-75">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              name="name"
              placeholder="Deck Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              type="text"
              className="form-control"
              name="description"
              placeholder="Brief description of the deck"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={() => history.push("/")}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
