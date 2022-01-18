import React from "react";
import { Link } from "react-router-dom";

export default function EditButton({ deckId, cardId, type }) {
  // if deck then display button for deck, otherwise display button for card
  return type === "deck" ? (
    <button
      className="btn btn-secondary mx-1"
      style={{ width: "7rem" }}
      type="button"
    >
      <Link to={`/decks/${deckId}/edit`} className="text-white">
        Edit
      </Link>
    </button>
  ) : (
    <button
      className="btn btn-secondary mx-1"
      style={{ width: "7rem" }}
      type="button"
    >
      <Link to={`/decks/${deckId}/cards/${cardId}/edit`} className="text-white">
        Edit
      </Link>
    </button>
  );
}
