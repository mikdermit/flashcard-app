import React from "react";
import { useHistory } from "react-router-dom";

export default function EditButton({ deckId, cardId, type }) {
  const history = useHistory()
  // if deck then display button for deck, otherwise display button for card
  return type === "deck" ? (
    <button
      className="btn btn-secondary mx-1"
      style={{ width: "7rem" }}
      type="button"
      onClick={() => history.push(`/decks/${deckId}/edit`)}
    >
      Edit
    </button>
  ) : (
    <button
      className="btn btn-secondary mx-1"
      style={{ width: "7rem" }}
      type="button"
      onClick={() => history.push(`/decks/${deckId}/cards/${cardId}/edit`)}
    >
      Edit
    </button>
  );
}
