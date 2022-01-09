import React from "react";
import DeleteBtn from "../common/buttons/DeleteBtn";
import StudyBtn from "../common/buttons/StudyBtn";
import ViewBtn from "../common/buttons/ViewBtn";

export default function DeckListItem({ deck }) {
  return (
    <div className="col-6 d-flex align-items-stretch">
      <div className="card m-2" key={deck.id}>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted float-right">
            {deck.cards.length}
          </h6>
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
        </div>
        <div className="card-footer">
          <div className="btn-wrapper">
            <ViewBtn id={deck.id} />
            <StudyBtn id={deck.id} />
            <DeleteBtn id={deck.id} type="deck" />
          </div>
        </div>
      </div>
    </div>
  );
}
