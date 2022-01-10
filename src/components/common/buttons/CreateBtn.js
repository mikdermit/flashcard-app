import React from "react";
import { Link } from "react-router-dom";

export default function CreateBtn({ deckId, type }) {
  // if deck then display button for deck, otherwise display button for card
  return type === "deck" ? (
    <div className="text-right">
      <button
        className="btn btn-secondary"
        style={{ width: "12rem" }}
        type="button"
      >
        <Link to="/flashcard-app/decks/new" className="text-white">
          Create Deck
        </Link>
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary mx-1"
      style={{ width: "7rem" }}
      type="button"
    >
      <Link
        to={`/flashcard-app/decks/${deckId}/cards/new`}
        className="text-white"
      >
        Add Cards
      </Link>
    </button>
  );
}
