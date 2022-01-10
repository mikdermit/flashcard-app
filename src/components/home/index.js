import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateDeck from "./CreateDeck";
import DeckCommands from "../deck/index";
import DeckList from "./DeckList";
import Header from "../common/Header";
import NotFound from "../common/NotFound";

export default function Home() {
  const { url } = useRouteMatch();
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={url}>
            <DeckList />
          </Route>
          <Route exact path={`${url}/decks/new`}>
            <CreateDeck />
          </Route>
          <Route path={`${url}/decks/:deckId`}>
            <DeckCommands />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}
