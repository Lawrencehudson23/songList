import React from "react";
import SongList from "./SongList";
import "./App.css";
import Nav from "./Nav";
import { SongProvider } from "./SongContext";
import AddSong from "./AddSong";

export default function App() {
  return (
    <SongProvider>
      <div className="App">
        <Nav />
        <AddSong />
        <SongList />
      </div>
    </SongProvider>
  );
}
