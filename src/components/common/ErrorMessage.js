import React from "react";

export default function ErrorMessage({ error, children }) {
  return (
    <main className="container">
      <p style={{ color: "red" }}>ERROR: {error.message}</p>
      {children}
    </main>
  );
}
