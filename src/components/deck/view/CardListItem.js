import React from "react";
import EditButton from "../../common/buttons/EditButton";
import DeleteButton from "../../common/buttons/DeleteButton";

export default function CardListItem({ card, deckId }) {
  return (
    <div className="col-6 d-flex align-items-stretch" key={card.id}>
      <div className="card m-2" style={{ width: "33rem" }} >
        <div className="card-body row">
          <div className="col">
            <h4 className="card-title">Front</h4>
            <p className="card-text">{card.front}</p>
          </div>
          <div className="col">
            <h4 className="card-title">Back</h4>
            <p className="card-text">{card.back}</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="btn-wrapper">
            <EditButton cardId={card.id} deckId={deckId} type="card" />
            <DeleteButton id={card.id} type="card" />
          </div>
        </div>
      </div>
    </div>
  );
}
