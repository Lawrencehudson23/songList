import React, { useState, createContext } from "react";

export const SongContext = createContext();
//but default
export function SongProvider(props) {
  const [songs, setSongs] = useState([
    {
      title: "i like it",
      singer: "justin",
      id: 2114546,
    },
    {
      title: "i dont like it",
      singer: "okafu",
      id: 4534,
    },
    {
      title: "you and me",
      singer: "amei",
      id: 988679,
    },
    {
      title: "western cowboy",
      singer: "jay chou",
      id: 2344,
    },
  ]);
  return (
    <SongContext.Provider value={[songs, setSongs]}>
      {props.children}
    </SongContext.Provider>
  );
}
