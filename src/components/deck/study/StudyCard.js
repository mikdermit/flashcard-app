import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function StudyCard({ cards }) {
  const initialState = { index: 0, flipped: false, viewed: false };
  const [session, setSession] = useState({ ...initialState });
  const history = useHistory();

  // when pressed toggle flip state to change side and mark viewed
  const handleFlip = event => {
    setSession({
      ...session,
      flipped: !session.flipped,
      viewed: true
    });
  };

  // when pressed go to next card, if last card then reset
  const handleNext = () => {
    session.index < cards.length - 1
      ? setSession({
          ...session,
          index: session.index + 1,
          flipped: false,
          viewed: false
        })
      : resetCards();
  };

  // confirm user would like to reset or go home
  const resetCards = () => {
    window.confirm(`Restart cards?\n\nClick "cancel" to return to the homepage`)
      ? setSession(initialState)
      : history.push("/");
  };

  return (
    <div className="card-deck justify-content-center text-center mt-4">
      <div className="w-75">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Card {session.index + 1} of {cards.length}
            </h4>
            <p className="card-text">
              {session.flipped
                ? cards[session.index].back
                : cards[session.index].front}
            </p>
          </div>
          <div className="card-footer">
            <div className="btn-wrapper">
              <button className="btn btn-secondary mx-1 float-left" style={{width: '5rem'}}onClick={handleFlip}>
                Flip
              </button>
              {session.viewed && (
                <button className="btn btn-primary mx-1 float-right" style={{width: '5rem'}} onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
