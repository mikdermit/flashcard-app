import React, { useState, useEffect } from "react";
import { readDeck } from "../../../utils/api";
import ErrorMessage from "../../common/ErrorMessage";
import LoadingMessage from "../../common/LoadingMessage";
import LowCards from './LowCards'
import NavBar from "../../common/NavBar";
import StudyCard from "./StudyCard";

export default function StudyDeck({ deckId }) {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState();
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

  // only display if there is a deck and cards no error. if there are less than 3 cards display low cards
  return error ? (
    <ErrorMessage error={error} />
  ) : !deck || !cards ? (
    <LoadingMessage />
  ) : cards.length < 3 ? (
    <>
      <h2 className="text-center">Study: {deck.name}</h2>
      <LowCards numCards={cards.length} deckId={deckId} />
    </>
  ) : (
    <>
      <NavBar id={deckId} navTitles={[deck.name, "Study"]} />
      <h2 className="text-center">Study: {deck.name}</h2>
      <StudyCard deckId={deckId} cards={cards} />
    </>
  );
}
