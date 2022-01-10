import React from "react";
import { Link } from "react-router-dom";

export default function StudyBtn({ id }) {
  return (
    <button
      className="btn btn-primary mx-1"
      style={{ width: "7rem" }}
      type="button"
    >
      <Link to={`/flashcard-app/decks/${id}/study`} className="text-white">
        Study
      </Link>
    </button>
  );
}
