import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createCard, readDeck } from "../../../utils/api";
import ErrorMessage from "../../common/ErrorMessage";
import LoadingMessage from "../../common/LoadingMessage";
import NavBar from "../../common/NavBar";

export default function CreateCard({ deckId }) {
  const initialFormState = { front: "", back: "" };
  const [deck, setDeck] = useState({});
  const [error, setError] = useState(undefined);
  const [formData, setFormData] = useState({ ...initialFormState });
  const history = useHistory();

  // get deck from api
  useEffect(() => {
    const controller = new AbortController();

    readDeck(deckId, controller.signal).then(setDeck).catch(setError);

    return () => controller.abort();
  }, [deckId]);

  // update form when changed
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // create card then reset form
  const handleSubmit = event => {
    event.preventDefault();
    createCard(deck.id, formData)
      .then(setFormData({ ...initialFormState }))
      .catch(console.error);
  };

  // only display if there is formData and no error
  return error ? (
    <ErrorMessage error={error} />
  ) : !formData || !deck ? (
    <LoadingMessage />
  ) : (
    <>
      <NavBar id={deck.id} navTitles={[deck.name, "Add Card"]} />
      <div className="container w-75">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              id="front"
              type="text"
              className="form-control"
              name="front"
              placeholder="Front side of card"
              onChange={handleChange}
              value={formData.front}
            />
          </div>
          <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea
              id="back"
              type="text"
              className="form-control"
              name="back"
              placeholder="Back side of card"
              onChange={handleChange}
              value={formData.back}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={() => history.push(`/decks/${deck.id}`)}
          >
            Done
          </button>
          <button type="submit" className="btn btn-primary m-2">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
