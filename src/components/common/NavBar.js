import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ navTitles, id }) {
  const list = navTitles.map((title, index) => {
    if (index === navTitles.length - 1) {
      return (
        <li key={index} className="breadcrumb-item" aria-current="page">
          {title}
        </li>
      );
    }
    return (
      <li key={index} className="breadcrumb-item">
        <Link to={`/flashcard-app/decks/${id}`}>{title}</Link>
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/flashcard-app">Home</Link>
        </li>
        {list}
      </ol>
    </nav>
  );
}
