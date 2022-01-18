import React from "react";
import { useHistory } from "react-router-dom";

export default function CreateButton({ deckId, type }) {
  const history = useHistory()
  // if deck then display button for deck, otherwise display button for card
  return type === "deck" ? (
    <div className="text-right">
      <button
        className="btn btn-secondary"
        style={{ width: "12rem" }}
        type="button"
        onClick={() => history.push('/decks/new')}
      >
        Create Deck
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary mx-1"
      style={{ width: "7rem" }}
      type="button"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      Add Cards
    </button>
  );
}
