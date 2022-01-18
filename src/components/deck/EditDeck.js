import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { updateDeck } from "../../utils/api";
import NavBar from "../common/NavBar";

export default function EditDeck({ deck, setDeck }) {
  const [formData, setFormData] = useState({ ...deck });
  const history = useHistory();

  // update form when changed
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // update deck and navigate to deck page
  const handleSubmit = event => {
    event.preventDefault();
    updateDeck(formData)
      .then(setDeck)
      .then(() => history.push(`/decks/${deck.id}`));
  };

  // display form
  return (
    <>
      <NavBar id={deck.id} navTitles={[deck.name, "Edit Deck"]} />
      <div className="container w-75">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              name="name"
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
