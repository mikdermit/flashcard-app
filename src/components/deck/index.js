import React, {useState, useEffect} from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import {readDeck} from '../../utils/api'
import Cards from "./cards/index";
import CardList from "./view/CardList";
import EditDeck from "./EditDeck";
import ErrorMessage from '../common/ErrorMessage'
import LoadingMessage from "../common/LoadingMessage";
import StudyDeck from "./study/StudyDeck";

export default function DeckCommands() {
  const {
    url,
    params: { deckId }
  } = useRouteMatch();
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([])
  const [error, setError] = useState(undefined);

  // get deck from api and setFormData every time deckId changes
  useEffect(() => {
    const controller = new AbortController();

    readDeck(deckId, controller.signal)
      .then(currentDeck => {
        setDeck(currentDeck);
        setCards(currentDeck.cards);
      })
      .catch(setError);

    return () => controller.abort();
  }, [deckId, setDeck]);

  return error ? (
    <ErrorMessage error={error} />
  ) : !deck || !cards ? (
    <LoadingMessage />
  ) : (
    <Switch>
      <Route path={`${url}/study`}>
        <StudyDeck deck={deck} cards={cards}/>
      </Route>
      <Route path={`${url}/edit`}>
        <EditDeck deck={deck} setDeck={setDeck}/>
      </Route>
      <Route path={`${url}/cards`}>
        <Cards deck={deck} setCards={setCards} />
      </Route>
      {/* <Route path={`${url}/cards/:cardId/edit`}>
        <CardForm deck={deck} action="edit"/>
      </Route> */}
      <Route exact path={url}>
        <CardList deck={deck} cards={cards} />
      </Route>
    </Switch>
  );
}
