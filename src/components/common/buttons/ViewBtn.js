import React from "react";
import { Link } from "react-router-dom";

export default function ViewBtn({ id }) {
  return (
    <button
      className="btn btn-secondary mx-1"
      style={{ width: "7rem" }}
      type="button"
    >
      <Link to={`/flashcard-app/decks/${id}`} className="text-white">
        View
      </Link>
    </button>
  );
}
