import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateDeck from "./CreateDeck";
import DeckCommands from "../deck/index";
import DeckList from "./DeckList";
import Header from "../common/Header";
import NotFound from "../common/NotFound";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckCommands />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}
