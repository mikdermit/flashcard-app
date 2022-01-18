import React, { useState } from "react";
import { createCard, readDeck } from "../../../utils/api";
import CardForm from "../../common/CardForm";
import NavBar from "../../common/NavBar";

export default function CreateCard({ deck, setCards }) {
  const initialCardState = { front: "", back: "" };
  const [card, setCard] = useState({ ...initialCardState });

  const handleSubmit = event => {
    event.preventDefault();
    //   ? updateCard(formData).then(() => history.push(`/decks/${deck.id}`))
    createCard(deck.id, card)
      .then(() => readDeck(deck.id))
      .then(currentDeck => setCards(currentDeck.cards))
      .then(setCard({ ...initialCardState }));
  };

  return (
    <>
      <NavBar id={deck.id} navTitles={[deck.name, "Add Card"]} />
      <CardForm
        deck={deck}
        card={card}
        setCard={setCard}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
