import React from "react";
import DeleteButton from "../common/buttons/DeleteButton";
import StudyButton from "../common/buttons/StudyButton";
import ViewButton from "../common/buttons/ViewButton";

export default function DeckListItem({ deck }) {
  return (
    <div className="col-6 d-flex align-items-stretch" key={deck.id}>
      <div className="card m-2" style={{ width: "33rem" }}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted float-right">
            {deck.cards.length}
          </h6>
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
        </div>
        <div className="card-footer">
          <div className="btn-wrapper">
            <ViewButton deckId={deck.id} />
            <StudyButton deckId={deck.id} />
            <DeleteButton id={deck.id} type="deck" />
          </div>
        </div>
      </div>
    </div>
  );
}
