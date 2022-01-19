import React from "react";
import LowCards from "./LowCards";
import NavBar from "../../common/NavBar";
import StudyCard from "./StudyCard";

export default function StudyDeck({ deck, cards }) {
  // if there are less than 3 cards display low cards
  return cards.length < 3 ? (
    <>
      <LowCards numCards={cards.length} deck={deck} />
    </>
  ) : (
    <>
      <NavBar id={deck.id} navTitles={[deck.name, "Study"]} />
      <h2 className="text-center">Study: {deck.name}</h2>
      <StudyCard deckId={deck.id} cards={cards} />
    </>
  );
}
