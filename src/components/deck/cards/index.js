import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateCard from './CreateCard'
import EditCard from './EditCard'
import NotFound from "../../common/NotFound";

export default function Cards({ deck, setCards }) {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/:cardId/edit`}>
        <EditCard deck={deck} setCards={setCards} />
      </Route>
      <Route path={`${url}/new`}>
        <CreateCard deck={deck} setCards={setCards} />
      </Route>
      <NotFound />
    </Switch>
  );
}
