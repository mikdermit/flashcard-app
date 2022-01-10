import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck, deleteCard } from "../../../utils/api";

export default function DeleteBtn({ id, type }) {
  const history = useHistory();

  const handleDelete = () => {
    if (
      window.confirm(
        `Delete this ${type}\n\nYou will not be able to recover it`
      )
    ) {
      type === "deck"
        ? deleteDeck(id).then(history.push("/flashcard-app"))
        : deleteCard(id);
    }
    history.go();
  };

  return (
    <button
      className="btn btn-danger float-right mx-1"
      style={{ width: "7rem" }}
      type="delete"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
