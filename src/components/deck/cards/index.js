import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
import NotFound from "../../common/NotFound";

export default function CardCommands({ deckId }) {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${url}/:cardId/edit`}>
        <EditCard deckId={deckId} />
      </Route>
      <Route path={`${url}/new`}>
        <CreateCard deckId={deckId} />
      </Route>
      <NotFound />
    </Switch>
  );
}
