import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateCard, readCard, readDeck } from "../../../utils/api";
import ErrorMessage from "../../common/ErrorMessage";
import LoadingMessage from '../../common/LoadingMessage'
import NavBar from '../../common/NavBar'

export default function EditCard({ deckId }) {
  const [deck, setDeck] = useState({})
  const [error, setError] = useState(undefined);
  const {cardId} = useParams()
  const [formData, setFormData] = useState({});
  const history = useHistory();
  // get card and deck from api
  useEffect(() => {
    const controller = new AbortController();

    readCard(cardId, controller.signal).then(setFormData).catch(setError)
    readDeck(deckId, controller.signal).then(setDeck).catch(setError)

    return () => controller.abort();
  }, [cardId, deckId]);

  // update form when changed
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  // update card and navigate to deck page
  const handleSubmit = event => {
    event.preventDefault();
    updateCard(formData).then(() => history.push(`/decks/${deckId}`));
  };
    
  // only display if there is a deck and formData and no error
  return error ? (
    <ErrorMessage error={error} />
  ) : !formData|| !deck ? (
    <LoadingMessage />
  ) : (
    <>
    <NavBar id={deckId} navTitles={[deck.name, `Edit Card ${cardId}`]} />
    <div className="container w-75">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            id="name"
            type="text"
            className="form-control"
            name="front"
            onChange={handleChange}
            value={formData.front}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Back</label>
          <textarea
            id="back"
            type="text"
            className="form-control"
            name="back"
            onChange={handleChange}
            value={formData.back}
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
