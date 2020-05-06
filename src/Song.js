import React from "react";

export default function Song({ title, singer }) {
  return (
    <div>
      <h3>Title:{title}</h3>
      <p>Singer:{singer}</p>
    </div>
  );
}
