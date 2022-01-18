import React, { useState, useEffect } from "react";
import { listDecks } from "../../utils/api";
import CreateButton from "../common/buttons/CreateButton";
import DeckListItem from "./DeckListItem";
import ErrorMessage from "../common/ErrorMessage";
import LoadingMessage from "../common/LoadingMessage";

export default function DeckList() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  // get decks from api every time page loads
  useEffect(() => {
    const controller = new AbortController();

    listDecks(controller.signal).then(setDecks).catch(setError);

    return () => controller.abort();
  }, []);

  // create card for each deck
  const list = decks.map(deck => <DeckListItem key={deck.id} deck={deck} />);

  // only display if there are decks and no error
  return error ? (
    <ErrorMessage error={error} />
  ) : !decks ? (
    <LoadingMessage />
  ) : (
    <main>
      <CreateButton type="deck" />
      <div className="row">{list}</div>
    </main>
  );
}
