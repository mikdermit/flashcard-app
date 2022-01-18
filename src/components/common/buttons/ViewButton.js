import React from "react";
import { useHistory } from "react-router-dom";

export default function ViewButton({ deckId }) {
  const history = useHistory()

  return (
    <button
      className="btn btn-secondary mx-1"
      style={{ width: "7rem" }}
      type="button"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      View
    </button>
  );
}
