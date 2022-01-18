import React from "react";
import CardListItem from "./CardListItem";
import CreateButton from "../../common/buttons/CreateButton";
import DeleteButton from "../../common/buttons/DeleteButton";
import EditButton from "../../common/buttons/EditButton";
import NavBar from "../../common/NavBar";
import StudyButton from "../../common/buttons/StudyButton";

export default function ViewDeck({ deck, cards }) {
  // create card for each card
  const cardList = cards.map(card => (
    <CardListItem key={card.id} card={card} deckId={deck.id} />
  ));

  // display deck and cards
  return (
    <>
      <NavBar id={deck.id} navTitles={[deck.name]} />
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
        </div>
        <div className="card-footer">
          <div className="btn-wrapper text-left">
            <EditButton deckId={deck.id} type="deck" />
            <StudyButton deckId={deck.id} />
            <CreateButton deckId={deck.id} type="card" />
            <DeleteButton id={deck.id} type="deck" />
          </div>
        </div>
      </div>
      <h2 className="mb-2 mt-4 ml-2">Cards</h2>
      <div className="row">{cardList}</div>;
    </>
  );
}
