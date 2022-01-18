import React from "react";
import CreateButton from "../../common/buttons/CreateButton";

export default function LowCards({ numCards, deckId }) {
  return (
    <div className="container text-center">
      <h3>Not enough cards.</h3>
      <p>
        You need at least 3 cards to study. There are {numCards} cards in this
        deck.
      </p>
      <CreateButton deckId={deckId} type="card" />
    </div>
  );
}
