import React, { useState, useEffect } from "react";
import { readDeck } from "../../../utils/api";
import CardListItem from "./CardListItem";
import CreateBtn from "../../common/buttons/CreateBtn";
import DeleteBtn from "../../common/buttons/DeleteBtn";
import EditBtn from "../../common/buttons/EditBtn";
import ErrorMessage from "../../common/ErrorMessage";
import LoadingMessage from "../../common/LoadingMessage";
import NavBar from "../../common/NavBar";
import StudyBtn from "../../common/buttons/StudyBtn";

export default function ViewDeck({ deckId }) {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(undefined);

  // get deck and cards from api every time the deckId changes
  useEffect(() => {
    const controller = new AbortController();

    readDeck(deckId, controller.signal)
      .then(currentDeck => {
        setDeck(currentDeck);
        setCards(currentDeck.cards);
      })
      .catch(setError);

    return () => controller.abort();
  }, [deckId]);

  // create card for each card
  const cardList = cards.map(card => (
    <CardListItem card={card} deckId={deck.id} />
  ));

  // only display if there is a deck and cards and no error
  return error ? (
    <ErrorMessage error={error} />
  ) : !deck || !cards ? (
    <LoadingMessage />
  ) : (
    <>
      <NavBar id={deck.id} navTitles={[deck.name]} />
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
        </div>
        <div className="card-footer">
          <div className="btn-wrapper text-left">
            <EditBtn deckId={deck.id} type="deck" />
            <StudyBtn id={deck.id} />
            <CreateBtn deckId={deck.id} type="card" />
            <DeleteBtn id={deck.id} type="deck" />
          </div>
        </div>
      </div>
      <h2 className="mb-2 mt-4 ml-2">Cards</h2>
      <div className="row">{cardList}</div>;
    </>
  );
}
