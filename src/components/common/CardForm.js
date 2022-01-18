import React from "react";
import { useHistory } from "react-router-dom";

export default function CardForm({ deck, card, setCard, handleSubmit }) {
  const history = useHistory()
  // update card front when changed
  const changeFront = event => {
    setCard({ ...card, front: event.target.value })
  }
  // update card back when changed
  const changeBack = event => {
    setCard({ ...card, back: event.target.value })
  }

  // only display if there is formData and no error
  return (
    <>
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
              onChange={changeFront}
              value={card.front}
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
              onChange={changeBack}
              value={card.back}
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
