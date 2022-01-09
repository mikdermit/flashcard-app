import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CardCommands from "./cards/index";
import CardList from "./view/CardList";
import EditDeck from "./EditDeck";
import StudyDeck from "./study/StudyDeck";

export default function DeckCommands() {
  const {
    url,
    params: { deckId }
  } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/study`}>
        <StudyDeck deckId={deckId} />
      </Route>
      <Route path={`${url}/edit`}>
        <EditDeck deckId={deckId} />
      </Route>
      <Route path={`${url}/cards`}>
        <CardCommands deckId={deckId} />
      </Route>
      <Route exact path={url}>
        <CardList deckId={deckId} />
      </Route>
    </Switch>
  );
}
