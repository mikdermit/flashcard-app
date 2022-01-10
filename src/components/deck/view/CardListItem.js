import React from "react";
import EditBtn from "../../common/buttons/EditBtn";
import DeleteBtn from "../../common/buttons/DeleteBtn";

export default function CardListItem({ card, deckId }) {
  return (
    <div className="col-6 d-flex align-items-stretch">
      <div className="card m-2" style={{ width: "33rem" }} key={card.id}>
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
            <EditBtn cardId={card.id} deckId={deckId} type="card" />
            <DeleteBtn id={card.id} type="card" />
          </div>
        </div>
      </div>
    </div>
  );
}
