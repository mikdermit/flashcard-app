import React from "react";
import { useHistory } from "react-router-dom";

export default function StudyButton({ deckId }) {
  const history = useHistory()

  return (
    <button
      className="btn btn-primary mx-1"
      style={{ width: "7rem" }}
      type="button"
      onClick={() => history.push(`/decks/${deckId}/study`)}
    >
      Study
    </button>
  );
}
