import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { updateCard, readCard, readDeck } from "../../../utils/api";
import CardForm from "../../common/CardForm";
import ErrorMessage from "../../common/ErrorMessage";
import LoadingMessage from "../../common/LoadingMessage";
import NavBar from "../../common/NavBar";

export default function EditCard({ deck, setCards }) {
  const { cardId } = useParams();
  const [card, setCard] = useState({});
  const [error, setError] = useState(undefined);
  const history = useHistory();
  // get card and deck from api
  useEffect(() => {
    const controller = new AbortController();

    readCard(cardId, controller.signal).then(setCard).catch(setError);

    return () => controller.abort();
  }, [cardId]);

  // update card and navigate to deck page
  const handleSubmit = event => {
    event.preventDefault();
    updateCard(card)
      .then(() => readDeck(deck.id))
      .then(currentDeck => setCards(currentDeck.cards))
      .then(() => history.push(`/decks/${deck.id}`));
  };

  // only display if there is a deck and formData and no error
  return error ? (
    <ErrorMessage error={error} />
  ) : !card ? (
    <LoadingMessage />
  ) : (
    <>
      <NavBar id={deck.id} navTitles={[deck.name, `Edit Card ${cardId}`]} />
      <CardForm
        deck={deck}
        card={card}
        setCard={setCard}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
