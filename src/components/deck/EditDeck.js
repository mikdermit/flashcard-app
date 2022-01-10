import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { updateDeck, readDeck } from "../../utils/api";
import ErrorMessage from "../common/ErrorMessage";
import LoadingMessage from "../common/LoadingMessage";
import NavBar from "../common/NavBar";

export default function EditDeck({ deckId }) {
  const [deck, setDeck] = useState({});
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(undefined);
  const history = useHistory();

  // get deck from api and setFormData every time deckId changes
  useEffect(() => {
    const controller = new AbortController();

    readDeck(deckId, controller.signal)
      .then(currentDeck => {
        setFormData(currentDeck);
        setDeck(currentDeck);
      })
      .catch(setError);

    return () => controller.abort();
  }, [deckId]);

  // update form when changed
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // update deck and navigate to deck page
  const handleSubmit = event => {
    event.preventDefault();
    updateDeck(formData).then(() =>
      history.push(`/flashcard-app/decks/${deckId}`)
    );
  };

  // only display if there is formData and no error
  return error ? (
    <ErrorMessage error={error} />
  ) : !formData ? (
    <LoadingMessage />
  ) : (
    <>
      <NavBar id={deckId} navTitles={[deck.name, "Edit Deck"]} />
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
            onClick={() => history.push("/flashcard-app")}
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
